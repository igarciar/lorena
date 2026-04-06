import { createRouter, createWebHistory } from "vue-router";
import DynamicPage from "@/views/DynamicPage.vue";
import Gallery from "@/views/Gallery.vue";
import Instagram from "@/views/Instagram.vue";
export default createRouter({ history:createWebHistory(), routes:[ { path:"/", component:DynamicPage, props:{id:"demo"} }, { path:"/page/:id", component:DynamicPage, props:true }, { path:"/galeria", component:Gallery }, { path:"/instagram", component:Instagram } ] });