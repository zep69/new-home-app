import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import login from '@/pages/Login.vue';
import Main from '@/pages/Main.vue';
import Profile from '@/pages/main/Profile.vue';
import Family from '@/pages/main/Family.vue';

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
    redirect:'/main/profile',
    children:[
      {
        path:'/main/profile',
        name:'Профиль',
        component:Profile
      },
      {
        path:'/main/family',
        name:'Семья',
        component:Family
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
