import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/SettingsView.vue')
  },
  { 
    path: '/endpoints',
    name: 'Endpoints',
    component: () => import('@/views/EndpointsView.vue') },
  {
    path: '/analytics',
    name: 'Analytics',
    component: () => import('@/views/AnaliticsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/myapp'),
  routes
})

export default router
