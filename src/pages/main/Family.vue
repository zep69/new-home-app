<template>
    <div class="family">
        <Card>
            <template #body>
                <div class="family--info">
                    <h2>Семья: <span class="family--info--name">Test</span>  </h2>
                </div>
            </template>
        </Card>
        <Card style="margin-top: 10px;">
            <template #body>
                <div class="family--members">
                    <h2>Участники:</h2>
                    <div class="family--members--block">
                        <div v-for="item in members" class="family--members--block--item">
                            <img :src="item.avatar" class="family--members--block--item--img" alt="">
                            <span>{{ item.firstname }} {{ item.surname }}</span>
                        </div>
                    </div>
                </div>
            </template>
        </Card>
        <Card style="margin-top: 10px;">
            <template #body>
                <div class="family--balance">
                    <h2>Бюджет: </h2>
                    <div class="family--balance--info">
                        <div class="family--balance--info--chart">
                            <Doughnut  :data="chartDonut" :options="chartOption"/>
                        </div>
                        <div class="family--balance--info--cash">
                            <span>Баланс: <span class="family--balance--info--cash--sum">777777 ₽</span></span>
                            <div class="family--balance--info--cash--last">
                                <span>Последние начисления и списания: </span>
                                <div v-for="item in purchases" >
                                    <div :class="['family--balance--info--cash--last--item', `family--balance--info--cash--last--item--${item.add}`]">
                                        <span>{{ item.name }}</span>
                                        <span>{{ item.sum}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </Card>
        <Card style="margin-top: 10px;">
            <template #body>
                <div class="family--wishlist">
                    <h2>Вишлист: </h2>
                    <div class="family--wishlist--block">
                        <div v-for="item in wishlist" class="family--wishlist--block--item">
                            <div style="display: flex; align-items: center;">
                                <div class="family--wishlist--block--item--author">
                                    <img :src="item.author.avatar" class="family--wishlist--block--item--author--avatar" alt="">
                                    {{ item.author.firstname }} {{ item.author.surname }}
                                </div>
                                <div class="family--wishlist--block--item--name">
                                    {{ item.name }}
                                </div>
                            </div>
                            <div>
                                <div class="family--wishlist--block--item--sum">
                                    Стоимость {{ item.sum }} Рублей
                                </div>
                            </div>
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
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip)

type Wish = {
    name : string,
    author : Member,
    isDone : boolean,
    sum : number
}

const wishlist = ref<Wish[]>([
    {
        name:'Moza R12',
        author: {
            firstname: 'Test',
            surname:'Test',
            avatar: 'https://media.istockphoto.com/id/2212478701/vector/monochrome-female-silhouette-with-short-hair.jpg?s=612x612&w=0&k=20&c=Q_6Z6fOgbLwV3lBeCOYybXNNkkeTj8bjUMlIcy8aGtI='
        },
        isDone: false,
        sum:30000
    },
    {
        name:'Test testiq',
        author: {
            firstname: 'Test',
            surname:'Test',
            avatar: 'https://media.istockphoto.com/id/2212478701/vector/monochrome-female-silhouette-with-short-hair.jpg?s=612x612&w=0&k=20&c=Q_6Z6fOgbLwV3lBeCOYybXNNkkeTj8bjUMlIcy8aGtI='
        },
        isDone: false,
        sum:80000
    },
])

type Purchase = {
    name : string,
    sum : number,
    add : boolean
}

const purchases = ref<Purchase[]>([
    {
        name:'ЗПшка',
        sum: 5000,
        add: true
    },
    {
        name:'Кредит',
        sum: 55623,
        add: false
    },
    {
        name:'ЗПшка',
        sum: 5000,
        add: true
    },
    {
        name:'Кредит',
        sum: 55623,
        add: false
    }
])

type Member = {
    firstname : string,
    surname : string,
    avatar : string,
}

const members = ref<Member[]>([
    {
        firstname: 'Test',
        surname:'Test',
        avatar: 'https://media.istockphoto.com/id/2212478701/vector/monochrome-female-silhouette-with-short-hair.jpg?s=612x612&w=0&k=20&c=Q_6Z6fOgbLwV3lBeCOYybXNNkkeTj8bjUMlIcy8aGtI='
    },
    {
        firstname: 'Test',
        surname:'Test',
        avatar: 'https://media.istockphoto.com/id/2212478701/vector/monochrome-female-silhouette-with-short-hair.jpg?s=612x612&w=0&k=20&c=Q_6Z6fOgbLwV3lBeCOYybXNNkkeTj8bjUMlIcy8aGtI='
    }
])


const chartDonut = ref({
      labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
     datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10]
    }
  ]
})

const chartOption = ref({
    responsive: true,
    maintainAspectRatio: false
})




</script>

<style scoped lang="scss">
.family {
    display: flex;
    flex-direction: column;
    &--info {
        padding: 20px;
        &--name {
            color: var(--primary-color);
        }
    }
    &--members {
        padding: 20px;
        &--block {
            margin-top: 10px;
            display: flex;
            justify-content: start;
            align-items: center;
            &--item {
                padding: 15px;
                display: flex;
                justify-content: start;
                align-items: center;
                border: thin solid var(--primary-color);
                margin-right: 15px;
                border-radius: 30px;
                font-size: 20px;
                transition: all 250ms;
                &--img {
                    height: 40px;
                    width: 40px;
                    margin-right: 10px;
                    border-radius: 50%;
                }
                &:hover {
                    cursor: pointer;
                    background-color: var(--primary-hover);
                }
                &:active {
                    transform: translateY(-5px);
                }
            }
        }
    }
    &--balance {
        padding: 20px;
        &--info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &--chart {
                height: 150px;
                width: 150px;
            }
            &--cash {
                display: flex;
                flex-direction: column;
                &--sum {
                    color: var(--primary-color);
                    font-size: 25px;
                }
                &--last {
                    display: flex;
                    flex-direction: column;
                    border: thin solid var(--border-default);
                    padding: 10px;
                    border-radius: 10px;
                    &--item {
                        display: flex;
                        padding: 3px;
                        justify-content: space-between;
                        border-radius: 5px;
                        margin: 2px;
                        &--false {
                            color: red;
                            background-color: rgb(63, 34, 34);
                        }
                        &--true {
                            color: var(--success-color);
                            background-color: var(--success-color-tonal);
                        }
                    }
                }
            }
        }
    }
    &--wishlist {
        padding: 20px;
        &--block {
            margin-top: 10px;
            &--item {
                display: flex;
                justify-content: space-between;
                border: thin solid var(--primary-color);
                padding: 5px;
                border-radius: 10px;
                margin-bottom: 10px;
                &--author {
                    background-color: var(--primary-hover);
                    border: none;
                    border-radius: 10px;
                    padding: 5px;
                    margin-right: 5px;
                    display: flex;
                    align-items: center;
                    &--avatar {
                        height: 20px;
                        width: 20px;
                        border-radius: 50%;
                        margin-right: 5px;
                    }
                }
                &--sum {
                    background-color: var(--success-color-tonal);
                    border: none;
                    border-radius: 10px;
                    padding: 5px;
                    margin-right: 5px;
                    display: flex;
                    align-items: center;
                }
                &--name {
                    display: flex;
                    align-items: center;
                    padding: 5px;
                }
            }
        }
    }
}
</style>