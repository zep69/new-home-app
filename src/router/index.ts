import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import login from '@/pages/Login.vue';
import Main from '@/pages/Main.vue';
import Profile from '@/pages/main/Profile.vue';

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
  {
    path:'/main',
    name:'Main',
    component:Main,
    children:[
      {
        path:'/main/profile',
        name:'Profile',
        component:Profile
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
