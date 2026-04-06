<template>
  <TopMenu />

  <div class="page">
    <h1>{{ title }}</h1>

    <PhotoGallery v-if="images.length" :images="images" />

    <div v-html="html"></div>
  </div>

  <Footer />
</template>

<script setup>
import { ref, onMounted } from "vue";
import TopMenu from "@/components/TopMenu.vue";
import Footer from "@/components/Footer.vue";
import PhotoGallery from "@/components/PhotoGallery.vue";
import parse from "@/utils/markdownEngine.js";

const props = defineProps({
  id: String,
  md: String
});

const html = ref("");
const title = ref("");
const images = ref([]);

onMounted(async () => {
  const file = props.md ? props.md : props.id;
  const url = `/src/content/${file}.md`;

  const raw = await fetch(url).then(r => r.text());

  const lines = raw.split("\n");

  for (const l of lines) {
    if (l.startsWith("@title:")) {
      title.value = l.replace("@title:", "").trim();
    }
    if (l.startsWith("@images:")) {
      try {
        images.value = JSON.parse(l.replace("@images:", "").trim());
      } catch (e) {
        console.error("Error leyendo @images:", e);
      }
    }
  }

  html.value = parse(raw);
});
</script>

<style scoped>
.page {
  padding: 20px;
}
</style>