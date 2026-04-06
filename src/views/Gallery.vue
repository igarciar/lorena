<template>
  <div class="page">
    <h1>Galería</h1>
    <PhotoGallery :images="['/r2/obra1.jpg', '/r2/obra2.jpg']" />
  </div>
</template>
<script setup>
import PhotoGallery from "@/components/PhotoGallery.vue";
</script>
