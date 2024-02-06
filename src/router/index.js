import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';

// Your route definitions
const routes = [
  {
    path: '/', // the URL path for TestPage
    name: 'HomePage',
    component: HomePage
  }
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;