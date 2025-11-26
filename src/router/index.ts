import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import login from '@/pages/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path:'/login',
    name:'Login',
    component:login
  },
  {
    path: '/',
    redirect: '/login',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
