
<template>
<header class="menu">
  <div class="logo">Artista</div>
  <button class="hamb" @click="open = !open">☰</button>

  <nav :class="{ open }">
    <router-link to="/">Inicio</router-link>

    <div class="submenu">
      <span @click="toggle('obras')">Obras ▾</span>
      <div class="submenu-items" :class="{ show: sub.obras }">
        <router-link to="/page/obras-pintura">Pintura</router-link>
        <router-link to="/page/obras-escultura">Escultura</router-link>
        <router-link to="/page/obras-fotografia">Fotografía</router-link>
      </div>
    </div>

    <div class="submenu">
      <span @click="toggle('expo')">Exposiciones ▾</span>
      <div class="submenu-items" :class="{ show: sub.expo }">
        <router-link to="/page/expo-2024">2024</router-link>
        <router-link to="/page/expo-2023">2023</router-link>
      </div>
    </div>

    <router-link to="/contacto">Contacto</router-link>
  </nav>
</header>
</template>

<script setup>
import { ref } from 'vue';
const open = ref(false);
const sub = ref({ obras:false, expo:false });
const toggle = (k) => sub.value[k] = !sub.value[k];
</script>

<style scoped>
.menu{ background:#333666; color:white; padding:15px; display:flex; justify-content:space-between; align-items:center; }
.hamb{ display:none; }
nav{ display:flex; gap:20px; }
.submenu{ position:relative; }
.submenu-items{ display:none; position:absolute; background:#464B8B; padding:10px; border-radius:8px; }
.submenu-items.show{ display:flex; flex-direction:column; }
@media(max-width:700px){
  nav{ display:none; flex-direction:column; width:100%; background:#464B8B; }
  nav.open{ display:flex; }
  .hamb{ display:block; background:none; color:white; font-size:24px; border:none; }
  .submenu-items{ position:relative; }
}
</style>
