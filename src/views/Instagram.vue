<template>
  <div class="page">
    <h1>Instagram</h1>
    <div v-for="p in feed" :key="p.id"><img :src="p.media_url" width="200" /></div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { getInstagramFeed } from "@/services/instagram.js";
const feed = ref([]);
onMounted(async () => {
  feed.value = await getInstagramFeed("TOKEN", "USERID");
});
</script>
