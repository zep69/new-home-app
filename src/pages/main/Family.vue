<template>
    <div class="family">
        <h1>
            Привет, Имя Фамилия! <br>
        </h1>
        <span>Вот небольшая сводка: </span>
        <Card style="margin-top: 10px;">
            <template #body>
                <div class="family--balance">
                    <h2>Семейный бюджет </h2>
                    <div class="family--balance--card">
                        <div class="family--balance--card--monyeline">
                            <h2>120 000 ₽</h2>
                            <div class="family--balance--card--monyeline--icon">
                                <i class="mdi mdi-cash "></i>
                            </div>
                        </div>
                        <div class="family--balance--card--checkpoint">
                            <span>У вас не задана цель</span>
                        </div>
                    </div>
                </div>
            </template>
        </Card>
        <div class="family--stock">
            <div class=" family--stock--block family--stock--block--need">
                <i class="mdi mdi-cart family--stock--block--icon"></i>
                <h3>Уже закончилось</h3>
                <div v-for="item in needarr" style="display: flex;justify-content: start;margin-bottom: 5px; align-items: center;">
                    <div class="family--stock--block--need--dot"></div>
                    <span>{{ item }}</span>
                </div>
                <div style="display: flex;justify-content: end;">
                    <span class="family--stock--block--need--span">Список</span>
                </div>
            </div>
            <div class="family--stock--block family--stock--block--empty">
                <i class="mdi mdi-store-alert family--stock--block--icon"></i>
                <h3>Скоро закончится</h3>
                <div v-for="item in empty" style="display: flex;justify-content: start;margin-bottom: 5px; align-items: center;">
                    <div class="family--stock--block--empty--dot"></div>
                    <span>{{ item }}</span>
                </div>
                <div style="display: flex;justify-content: end;">
                    <span class="family--stock--block--empty--span">Пополнить</span>
                </div>
            </div>
        </div>
        <div class="family--wishlist">
            <span>У вас есть предметы в вишлисте</span>
            <button class="button-default ">Посмореть</button>
        </div>

    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import Card from '@/components/Card/Card.vue';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import '../../styles/family.scss'

ChartJS.register(ArcElement, Tooltip)

const empty = ref<string[]>(['Зубная паста', 'Гречка'])

const needarr = ref<string[]>(['Яйца', 'Хлеб'])

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

</style>