<template>
    <div>
        {{ text }}
    </div>
    <Card style="width: 400px;">
        <template #header >
            <div style="padding: 10px;">
               <h1>Пиписьки</h1> 
            </div>
        </template>
        <template #body>
            <div style="padding: 10px;">
                <input type="text">
                <br>
                <input type="text">
                <br>
                <Input placeholder="123123"/>
            </div>
        </template>
    </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/components/Card/Card.vue';
import Input from '@/components/inputs/Input.vue';

const text = ref<string>('Какапука')
</script>

<style scoped lang="scss">

</style>