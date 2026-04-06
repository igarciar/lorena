
<template>
<div class="gallery">
  <button @click="prev">⟨</button>
  <img :src="current" />
  <button @click="next">⟩</button>
</div>
</template>

<script setup>
import { ref, computed } from 'vue';
const props = defineProps({ images:Array });
const i = ref(0);
const current = computed(() => props.images[i.value]);
const prev = () => i.value = (i.value - 1 + props.images.length) % props.images.length;
const next = () => i.value = (i.value + 1) % props.images.length;
</script>

<style scoped>
.gallery{ display:flex; align-items:center; gap:10px; }
img{ max-width:300px; border-radius:10px; }
</style>
