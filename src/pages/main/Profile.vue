<template>
    <div class="profile">
        <Card>
            <template #body>
                <div>
                    <div class="profile--info">
                        <div style="display: flex; align-items: center;">
                            <img class="profile--info--avatar" src="https://media.istockphoto.com/id/2212478701/vector/monochrome-female-silhouette-with-short-hair.jpg?s=612x612&w=0&k=20&c=Q_6Z6fOgbLwV3lBeCOYybXNNkkeTj8bjUMlIcy8aGtI=" alt="">
                            <div style="margin-left: 20px;">
                                <span class="profile--info--name">Name Name</span>
                                <br>
                                <span>email: <span style="color: var(--primary-color);">test@test.com</span> </span>
                                <br>
                                <span>День рождения: <span style="color: var(--primary-color);">01.01.2000</span></span>
                            </div>
                        </div>
                        <div>
                            <Button variant="default">
                                Редактировать
                            </Button>
                        </div>
                    </div>
                </div>
            </template>
        </Card>

        <Card style="margin-top: 20px;">
            <template #body>
                <div class="profile--family">
                    <div class="profile--family--name">
                        <h2>Вы состоите в семье</h2>
                        <span class="profile--family--name--colorise"> Пикаловы</span>
                    </div>
                    <div class="profile--family--modules">
                        <div v-for="item in modules" :key="item.name" class="profile--family--modules--item">
                            <i :class="['mdi', item.icon]"></i>
                            <span>{{ item.name }}</span>
                        </div>
                    </div>
                </div>
                
            </template>
        </Card>
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
    &--info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        &--name {
            font-size: 20px;
        }
        &--avatar {
            border-radius: 50%;
            height: 150px;
            width: 150px;
        }
    }
    &--family {
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: 20px;
        &--name {
            display: flex;
            justify-content: start;
            align-items: center;
            &--colorise {
                color: var(--primary-color); 
                font-size: 20px; 
                margin-left: 10px;
                transition: all 250ms;
                &:hover {
                    cursor: pointer;
                    transition: all 250ms;
                    transform: translateY(-5px);
                }
            }
        }
        &--modules {
            display: flex;
            justify-content: start; 
            align-items: center;
            margin-top: 10px;
            &--item {
                padding: 10px;
                border-radius: 10px;
                background-color: var(--primary-color);
                margin-right: 5px;
                transition: 250ms all;
                &:hover {
                    cursor: pointer;
                    transform: translateY(-5px);
                }
            }
        }
    }
}
</style>