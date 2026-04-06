<template>
  <div class="page">
  <TopMenu />
    <h1>{{ title }}</h1>
    <div v-html="html" />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import parse from "@/utils/markdownEngine";
import TopMenu from "@/components/TopMenu.vue";
import { useRoute } from "vue-router";
const r = useRoute();
const title = ref("");
const html = ref("");
onMounted(async () => {
  const raw = await fetch("/src/content/" + r.params.id + ".md").then((r) => r.text());
  raw.split("\n").forEach((l) => {
    if (l.startsWith("@title:")) title.value = l.replace("@title:", "").trim();
  });
  html.value = parse(raw);
});
</script>
