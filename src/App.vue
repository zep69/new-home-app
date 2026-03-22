<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import Button from './components/buttons/Button.vue'
import Footer from './components/Footer.vue'
import FooterPhone from './components/FooterPhone.vue'
import HeaderPhone from './components/HeaderPhone.vue'
import dotenv from 'dotenv'

import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.path)
const year : number = new Date().getFullYear()

function checkRoute():object{
  if(route.path === '/login'){
    return {display: 'none'}
  }else{
    return {}
  }
}

const THEMES = {
  DARK: 'dark',
  LIGHT:'light'
} as const;

function clikcButton(){
  alert('Pipa pupa')
}
</script>

<template>
  <HeaderPhone :class="['header-phone', checkRoute]" :style="checkRoute()">

  </HeaderPhone>

  <div class="main">
    <router-view></router-view>
  </div>

  <Footer class="footer">
    <template #end>
      <p class="footer-text">Pikalov Nikita, {{ year }}</p>
    </template>
  </Footer>
  <FooterPhone :class="['footer-phone', checkRoute]" :style="checkRoute()">

  </FooterPhone>
</template>

<style scoped lang="scss">
.hidden {
  display: none;
}
.header-phone {
  display: none;
}
.footer {
  display: flex;
}
.footer-phone {
  display: none;
}
.main{
  min-height: calc(100vh - 100px - 50px); // экран минус header и footer
  padding: 60px 16px 110px 16px;
}
.footer-text{
  color: var(--text-color-secondary); 
}
@media screen and (max-width: 768px) { 
  .footer{
    display: none;
  }
  .footer-phone {
    display: flex;
  }
  .header-phone{
    display: inherit;
  }
  .hidden {
  display: none;
  }
}
</style>
