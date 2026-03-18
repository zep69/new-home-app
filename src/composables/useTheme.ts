import { ref, onMounted, watch } from 'vue'

const isDark = ref(false)

const THEMES = {
  DARK: 'dark',
  LIGHT: 'light'
} as const

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  onMounted(() => {
    const saved = localStorage.getItem('theme')

    if (saved === THEMES.DARK) {
      isDark.value = true
    }
  })

  watch(isDark, (val) => {
    document.documentElement.classList.toggle(THEMES.DARK, val)
    localStorage.setItem('theme', val ? THEMES.DARK : THEMES.LIGHT)
  })

  return {
    isDark,
    toggleTheme
  }
}