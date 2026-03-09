<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import Button from './components/buttons/Button.vue'
import Footer from './components/Footer.vue'
import dotenv from 'dotenv'
const isDark = ref<boolean>(false)


const year : number = new Date().getFullYear()

const THEMES = {
  DARK: 'dark',
  LIGHT:'light'
} as const;

const toggleTheme = () => {
  isDark.value = !isDark.value

  document.body.classList.toggle(THEMES.DARK, isDark.value)
  localStorage.setItem('theme', isDark.value ? THEMES.DARK : THEMES.LIGHT)
}
onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === THEMES.DARK) {
    isDark.value = true
    document.body.classList.add(THEMES.DARK)
  }
})

function clikcButton(){
  alert('Pipa pupa')
}
</script>

<template>
  <body>
    <div class="main">
      <router-view></router-view>
    </div>
  </body>
  <Footer>
    <template #end>
      <p class="footer-text">Pikalov Nikita, {{ year }}</p>
    </template>
  </Footer>
</template>

<style scoped lang="scss">
.main{
  min-height: calc(100vh - 70px - 40px); // экран минус header и footer
  padding: 16px;
  padding-bottom: 60px; // чтобы контент не прятался под футером
}
.footer-text{
  color: var(--text-color-secondary); 
}
</style>
