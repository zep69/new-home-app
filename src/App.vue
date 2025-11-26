<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import Button from './components/buttons/Button.vue'
import Footer from './components/Footer.vue'
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
   <Header>
    <template #start>
      <button @click="toggleTheme">Раздва три</button>
      <button style="margin-left: 10px;">Раз два</button>
    </template>
    <template #center>
      <Button color="success" variant="tonal" @click="clikcButton">
        Kaka фывфыв фыв фыв фыв 
      </Button>
    </template>
    <template #end>
      <button>
        Выход
      </button>
    </template>
  </Header> 
    

    

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
