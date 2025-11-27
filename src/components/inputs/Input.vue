<template>
    <input :placeholder="props.placeholder"/>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'

const props = withDefaults(
    defineProps<{
        placeholder?: string,
        type?:'text' | 'password' | 'number'
    }>(),
    {
        placeholder:'',
        type:'text'
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
</style>