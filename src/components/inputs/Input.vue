<template>
  <div class="input-wrapper">
    <i v-if="props.icon !== null" :class="['mdi', props.icon, 'icon']"></i>

    <input
      :value="modelValue"
      @input="onInput"
      :class="[`input-wrapper--${checkIcon}`]"
      :type="props.type"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: string | null
    placeholder?: string
    type?: 'text' | 'password' | 'number'
    icon?: null | string
  }>(),
  {
    placeholder: '',
    type: 'text',
    icon: null,
    modelValue: null
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onInput(e: Event) {
  const value = (e.target as HTMLInputElement).value
  emit('update:modelValue', value)
}

const checkIcon = computed(() => {
  return props.icon === null ? 'null' : 'icon'
})
</script>

<style scoped lang="scss">
input {
    background-color: var(--bg-color-elements);
    border: solid 1px var(--border-default);
    outline:none;
    padding: 10px;
    border-radius: 15px;
    color: var(--border-default) ;
}
.input-wrapper {
  position: relative;
  &--null {
    width: 100%;
    height: 40px;
    
    font-size: 14px;
  }
  &--icon {
    font-size: 14px;
    width: 100%;
    padding-left: 38px;
    height: 40px;
  }
}
 /*
.input-wrapper input {
  width: 100%;
  height: 40px;
  padding-left: 38px;
  font-size: 14px;
}*/

.icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #888;
  pointer-events: none;
}
</style>