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
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import Card from '@/components/Card/Card.vue';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip)


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
                            background-color: rgb(31, 53, 31);
                        }
                    }
                }
            }
        }
    }
}
</style>