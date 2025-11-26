<template>
  <button :class="['btn', `btn--${props.variant}`, `btn--${props.color}`]">
    <slot />
  </button>
</template>

<script setup lang="ts">
import {ref, defineProps, computed} from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'default' | 'tonal' | 'text'
    color?: 'primary' | 'success' | 'error'
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
  transition: background 0.3s, color 0.3s;

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
}

</style>