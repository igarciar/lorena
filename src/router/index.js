
import { createRouter, createWebHistory } from 'vue-router';
import DynamicPage from '@/views/DynamicPage.vue';
import Contact from '@/views/Contact.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: DynamicPage, props: { md: 'home' } },
    { path: '/page/:id', component: DynamicPage, props: true },
    { path: '/contacto', component: Contact }
  ]
});
