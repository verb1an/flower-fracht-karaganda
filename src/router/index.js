import { createRouter, createWebHistory } from 'vue-router'
import AppHome from "@/views/AppHome";

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppHome
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
