<template>
    <div style="display: flex;justify-content: center;align-items: center;">
        <Card style="width: 400px;">
            <template #header >
                <div style="padding: 10px;margin-left: 10px;">
                    <h1>Войдите в систему</h1> 
                </div>
            </template>
            <template #body>
                <div style="padding: 20px;">
                        <Input v-model="loginForm.login" :type="'text'" :icon="'mdi-account-outline'" placeholder="Логин"/>
                        <Input v-model="loginForm.password" style="margin-top: 10px;" :type="'password'" placeholder="Пароль" icon="mdi-lock-outline"/>
                        <div style="display: flex; justify-content: center; margin-top: 10px ;">
                            <Button @click="logData(loginForm)">
                                Войти
                            </Button>
                        </div>
                        
                

                </div>
            </template>
        </Card>
    </div>
    
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import Card from '@/components/Card/Card.vue';
import Input from '@/components/inputs/Input.vue';
import Button from '@/components/buttons/Button.vue';

type loginType = {
    login:string,
    password: string
}

const loginForm = reactive<loginType>({
    login:'',
    password:'',
})

function logData(data:loginType): void{
    console.log(data)
}

const text = ref<string>('Какапука')
</script>

<style scoped lang="scss">

</style>