<template>
  <div class="page">
    <TopMenu />
    <h1>{{ title }}</h1>
    <p v-if="desc" style="opacity: 0.7">{{ desc }}</p>
    <div class="grid">
      <router-link v-for="(i, k) in grid" :key="k" :to="i.to" class="grid-item"
        ><img :src="'/r2/' + i.image" /><span>{{ i.label }}</span></router-link
      >
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import TopMenu from "@/components/TopMenu.vue";
const r = useRoute();
const title = ref("");
const desc = ref("");
const grid = ref([]);
onMounted(async () => {
  const raw = await fetch("/src/content/series/" + r.params.id + ".md").then((r) =>
    r.text()
  );
  raw.split("\n").forEach((l) => {
    if (l.startsWith("@title:")) title.value = l.replace("@title:", "").trim();
    if (l.startsWith("@description:")) desc.value = l.replace("@description:", "").trim();
    if (l.startsWith("@grid:")) grid.value = JSON.parse(l.replace("@grid:", "").trim());
  });
});
</script>
