<template>
  <button :class="['btn', `btn--${props.variant}`, `btn--${props.color}`]">
    <slot />
  </button>
</template>

<script setup lang="ts">
import {ref, defineProps, computed} from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'default' | 'tonal' | 'text' | 'outlined'
    color?: 'primary' | 'success' | 'error' | 'warn'
  }>(),
  {
    variant: 'default',
    color: 'primary',
  }
)



</script>

<style scoped lang="scss">
.btn {
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 1s;

  &--default {
    background: var(--primary-color);
    color: white;
  }
  &--tonal {
    background: var(--primary-color-tint);
    color: var(--primary-color);
  }
  &--text {
    background: transparent;
    color: var(--primary-color);
  }
  &--outlined {
    background: transparent;
    color: var(--primary-color);
    border: solid var(--primary-color) 1px;
  }

  &--primary {
    --primary-color: #4f46e5;
    --primary-color-tint: #e0e0ff;
  }
  &--success {
    --primary-color: #16a34a;
    --primary-color-tint: #d1fae5;
  }
  &--error {
    --primary-color: #dc2626;
    --primary-color-tint: #fee2e2;
  }
  &--warn {
    --primary-color: orange;
    --primary-color-tint: rgb(255, 224, 168); 
  }
}
.btn:hover{
  //transform: translateY(-5px);
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

</style>