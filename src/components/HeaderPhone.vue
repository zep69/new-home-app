<template>
    <div class="header">
        <div class="header--title">
            <button class="header--title--btn">
                <i class="mdi mdi-arrow-left-thin"></i>
            </button>
            <span class="header--title--text">{{ route.name }}</span>
            <button class="header--title--btn" @click="toggleTheme">
                <i class="mdi" :class="isDark ?   'mdi-white-balance-sunny':'mdi-weather-night'"></i>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useTheme } from '@/composables/useTheme'

const route = useRoute()
const { toggleTheme, isDark } = useTheme()

    
</script>

<style scoped lang="scss">
.header {
    height: 50px;
    background-color: var(--bg-color-elements);    
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    color: white;
    box-shadow: 0px 0px 34px -8px rgba(0,0,0,0.36);
    &--title {
        padding: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &--text{
            color: var(--text-color);
        }
        &--btn {
            background: none;
            color: var(--primary-color);
            font-size: 20px;
            outline: none;
            -webkit-tap-highlight-color: transparent;
        }
    }
}
</style>