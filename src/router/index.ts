import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/modules/gym/views/HomeView.vue';
import { authRoutes } from '@/modules/auht/routes';

const routes = [
  { path: '/',
    name:'home',
    component: HomeView 
  },

  authRoutes,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;