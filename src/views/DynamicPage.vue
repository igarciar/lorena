
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
import { ref, onMounted } from 'vue';
import TopMenu from '@/components/TopMenu.vue';
import Footer from '@/components/Footer.vue';
import PhotoGallery from '@/components/PhotoGallery.vue';
import parse from '@/utils/markdownEngine.js';

const props = defineProps({ id:String, md:String });
const html = ref('');
const title = ref('');
const images = ref([]);

onMounted(async () => {
  const file = props.md ? props.md : props.id;
  const raw = await fetch(`/src/content/${file}.md`).then(r => r.text());

  raw.split("
").forEach(line => {
    if (line.startsWith('@title:')) title.value = line.replace('@title:','').trim();
    if (line.startsWith('@images:')) images.value = JSON.parse(line.replace('@images:','').trim());
  });

  html.value = parse(raw);
});
</script>

<style scoped>
.page{ padding:20px; }
</style>
