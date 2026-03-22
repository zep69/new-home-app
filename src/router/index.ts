import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import login from '@/pages/Login.vue';
import Main from '@/pages/Main.vue';
import Profile from '@/pages/main/Profile.vue';
import Family from '@/pages/main/Family.vue';
import Wishlist from '@/pages/main/Wishlist.vue';
import Pantry from '@/pages/main/Pantry.vue';
import Budget from '@/pages/main/Budget.vue';

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
      },
      {
        path:'/main/wishlist',
        name:'Вишлист',
        component:Wishlist
      },
      {
        path:'/main/pantry',
        name:'Запасы',
        component:Pantry
      },
      {
        path:'/main/budget',
        name:'Бюджет',
        component:Budget
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
