<template>
    <div class="profile">
        <img class="profile--avatar" src="https://media.istockphoto.com/id/2212478701/vector/monochrome-female-silhouette-with-short-hair.jpg?s=612x612&w=0&k=20&c=Q_6Z6fOgbLwV3lBeCOYybXNNkkeTj8bjUMlIcy8aGtI=" alt="">
        <h2 class="profile--name">Name Name</h2>
        <span>tesiq</span>
        <div class="profile--subplan">
            <div class="profile--subplan--status">
                <div>
                    <i class="mdi mdi-lock-check-outline"></i>
                    Статус подписки
                </div>
                <div class="profile--subplan--status--badge">
                    Активная
                </div>
            </div>
            <h2 style="margin-top: 10px;">Максимальный уровень </h2>
            <span>Бесконечная</span>
        </div>
        <div class="profile--settings">
            <span class="">Настройки аккаунта</span>
            <div class="profile--settings--block">

            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import Card from '@/components/Card/Card.vue';
import Button from '@/components/buttons/Button.vue';

type Module = {
    name: string,
    icon : string,
}


const modules = ref<Module[]>([
    {
        name:'Бюджет',
        icon:'mdi-cash'
    },
    {
        name:'Покупки',
        icon:'mdi-format-list-checks'
    },
    {
        name:'Вишлист',
        icon:'mdi-playlist-star'
    }
])


</script>
 
<style scoped lang="scss">
.profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    &--avatar {
        margin-top: 20px;
        height: 140px;
        width: 140px;
        border-radius: 50%;
        border: 3px solid white;
    }
    &--name {
        margin-top: 10px;
    }
    &--subplan {
        margin-top: 40px;
        background-color: var(--primary-color-t8);
        padding: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        &--status {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &--title {

            }
            &--badge {
                background-color: var(--primary-color-t4);
                padding: 5px;
                border-radius: 15px;
                color: var(--primary-color-t8);
                font-size: 15px;
                font-weight: 500;
            }
        }
        
    }
    &--settings {
        margin-top: 10px;
        width: 100%;
        &--block {
            background-color: var(--bg-color-elements);
            border-radius: 15px;
            padding: 15px;
            margin-top: 10px;
        }
    }
}
</style>