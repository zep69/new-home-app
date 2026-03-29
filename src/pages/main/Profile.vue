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
                <div class="profile--settings--block--item">
                    <div>
                        <i class="mdi mdi-account profile--settings--block--item--icon"></i>
                        <span class="profile--settings--block--item--text">Персональная информация</span>
                    </div>
                    
                    <i class="mdi mdi-arrow-right"></i>
                </div>
                <div class="profile--settings--block--item">
                    <div>
                        <i class="mdi mdi-security profile--settings--block--item--icon"></i>
                        <span class="profile--settings--block--item--text">Пароль и безопасность</span>
                    </div>
                    
                    <i class="mdi mdi-arrow-right"></i>
                </div>
            </div>
        </div>
        <div class="profile--members">
            <span>Участники семьи</span>
            <div class="profile--members--block">
                <div class="profile--members--block--item" v-for="item in members">
                    <div >
                        <img class="profile--members--block--item--avatar" :src="item.avatar" alt="">
                    </div>
                    
                </div>
                <div class="profile--members--block--add">
                    <i class="mdi mdi-plus"></i>
                </div>
            </div>

        </div>
        <div class="profile--logout">
            <button class="profile--logout--button">
                <i class="mdi mdi-logout"></i>
                Выйти
            </button>
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

type Member = {
    name:string,
    avatar:string
}


const members = ref<Member[]>([
    {
        name:'Test sets',
        avatar:'https://media.istockphoto.com/id/2212478701/vector/monochrome-female-silhouette-with-short-hair.jpg?s=612x612&w=0&k=20&c=Q_6Z6fOgbLwV3lBeCOYybXNNkkeTj8bjUMlIcy8aGtI='
    },
    {
        name:'Test sets',
        avatar:'https://media.istockphoto.com/id/2212478701/vector/monochrome-female-silhouette-with-short-hair.jpg?s=612x612&w=0&k=20&c=Q_6Z6fOgbLwV3lBeCOYybXNNkkeTj8bjUMlIcy8aGtI='
    }
])

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
            &--item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: none;
                padding: 5px;
                margin-bottom: 5px;
                &--text {
                    font-size: 18px;
                    font-style: bold;
                    margin-left: 10px;
                    color: var(--primary-color);
                }
                &--icon {
                    font-size: 24px;
                    padding: 5px;
                    background-color: var(--bg-color);
                    border-radius: 5px;
                    color: var(--primary-color);
                }
            }

        }
    }
    &--members {
        margin-top: 10px;
        width: 100%;
        &--block {
            display: flex;
            justify-content: start;
            align-items: center;
            margin-top: 10px;
            &--item {
                border-radius: 50%;
                padding: 4px;
                border: solid thin var(--primary-color);
                height: 70px;
                width: 70px;
                margin-right: 10px;
                &--avatar {
                    height: 60px;
                    width: 60px;
                    border-radius: 50%;
                }
            }
            &--add {
                height: 70px;
                width: 70px;
                border-radius: 50%;
                border:thin dashed var(--primary-color);
                display: flex;
                justify-content: center;
                align-items: center;
                color: var(--primary-color);
                font-size: 30px;
            }
        }
    }
    &--logout {
        margin-top: 10px;
        width: 100%;
        &--button {
            background: none;
            border: 2px solid var(--error-color-tonal);
            color: var(--error-color);
            width: 100%;
            padding: 15px;
            border-radius: 15px;
            font-size: 24px;
        }
    }
}
</style>