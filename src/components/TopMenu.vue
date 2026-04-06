<template>
  <header class="menu">
    <strong>Lorena Allas Santamaría</strong>
    <nav>
      <template v-for="i in menu" :key="i.label">
      <router-link v-if="!i.children" :to="i.to">{{ i.label }}</router-link>
        <div v-else class="submenu">
          <span>{{ i.label }}</span>
          <div class="submenu-items">
            <router-link v-for="c in i.children" :key="c.label" :to="c.to">{{c.label}}</router-link>
          </div>
        </div>
        </template>
    </nav>
  </header>
</template>
<script setup>
import { ref, onMounted } from "vue";
//import { useMenu } from "@/utils/useMenu";
const menu = ref([]);

let loaded = false;
//onMounted(async () => (menu.value = await useMenu()));
onMounted(async () => {
   if (!loaded) {
    const raw = await fetch("/src/content/menu.md").then((r) => r.text());
    raw.split("\n").forEach((l) => {
      if (l.startsWith("@menu:")) menu.value = JSON.parse(l.replace("@menu:", "").trim());
    });
    loaded = true;
  }

});
</script>
