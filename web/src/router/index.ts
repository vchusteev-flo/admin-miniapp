import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    // lazy-loaded route
    component: () => import('@/views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/myapp'),
  routes
})

export default router
