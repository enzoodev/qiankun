import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory('/patrimonio'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/about.vue'),
      meta: {
        title: 'Meu title de meta',
        subtitle: 'Meu subtitle de meta',
      }
    },
  ],
});
