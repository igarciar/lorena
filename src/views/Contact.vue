
<template>
  <TopMenu />
  <div class="page">
    <h1>Contacto</h1>
    <div v-html="html"></div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TopMenu from '@/components/TopMenu.vue';
import Footer from '@/components/Footer.vue';
import parse from '@/utils/markdownEngine.js';

const html = ref('');
onMounted(async () => {
  const raw = await fetch('/src/content/contacto.md').then(r => r.text());
  html.value = parse(raw);
});
</script>
