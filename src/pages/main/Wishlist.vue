<template>
    <div class="wishlist">
        <div class="wishlist--header">
            <h1>Семейный вишлист</h1>
        </div>
        <div class="wishlist--subheader">
            <span>Тут ваш семейный вишлист</span>
        </div>
        <div class="wishlist--filters">
            <button :class="[`wishlist--filters--button`, activateButton(item.active)]" v-for="(item, index) in buttons" @click="item.active = !item.active">{{ item.name }}</button>
        </div>
        <div class="wishlist--add">
            <button class="wishlist--add--button">
                Добавить предмет
            </button>
        </div>
        <div class="wishlist--items">
            <div class="wishlist--items--card" v-for="(item, index) in wishItems" :key="index">
                <div v-if="item.isHigh"
                    class="wishlist--items--card--cover"
                    :style="{ backgroundImage: `url(${item.img})` }">
                    <div class="wishlist--items--card--cover--row">
                        <div class="wishlist--items--card--cover--row--badge">
                            Высокий приоритет
                        </div>
                    </div>
                </div>
                <div style="display: flex;justify-content: space-between; align-items: start; width: 100%;">
                    <div style="display: flex;justify-content: start;">
                        <img :src="item.img" class="wishlist--items--card--image" alt="" v-if="!item.isHigh">
                        <div class="wishlist--items--card--name">
                            <h3 >{{ item.name }}</h3>
                            <span>{{ item.cost }} Rub</span>
                        </div>
                    </div>
                    <div class="wishlist--items--card--icon">
                        <i class="mdi mdi-dots-vertical"></i>
                    </div>
                </div>
                <div v-if="item.isHigh" class="wishlist--items--card--buy">
                    <button class="wishlist--items--card--buy--button">Купить</button>
                </div>

                    


            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import {ref} from 'vue'

type Button = {
    name : string,
    active : boolean,
    class?:string
}

type Item = {
    name : string,
    cost : number,
    img ?: string,
    isHigh : boolean,
    isBuy : boolean
}

const wishItems = ref<Item[]>([
    {
        name:'sdasd',
        cost: 4542,
        img:'https://img.freepik.com/free-photo/3d-illustration-closed-black-gift-box_107791-18203.jpg?semt=ais_hybrid&w=740&q=80',
        isHigh: false,
        isBuy: false
    },
    {
        name:'kjfd kjsdfhkj',
        cost: 222,
        img:'https://img.freepik.com/free-photo/3d-illustration-closed-black-gift-box_107791-18203.jpg?semt=ais_hybrid&w=740&q=80',
        isHigh: true,
        isBuy: false
    },
    {
        name:'sdakj kkskdjkds sd',
        cost: 800,
        img:'https://img.freepik.com/free-photo/3d-illustration-closed-black-gift-box_107791-18203.jpg?semt=ais_hybrid&w=740&q=80',
        isHigh: false,
        isBuy: false
    },
    {
        name:'akjjkk lskjsdfl lsd',
        cost: 4231,
        img:'https://img.freepik.com/free-photo/3d-illustration-closed-black-gift-box_107791-18203.jpg?semt=ais_hybrid&w=740&q=80',
        isHigh: false,
        isBuy: false
    },
])

const buttons = ref<Button[]>([
    {
        name:'Все предметы',
        active:false,
    },
    {
        name:'Высокий приоритет',
        active:false
    },
    {
        name:'Мои предметы',
        active:false
    }
])

function activateButton(active:boolean){
    if(active) {
        return "wishlist--filters--button--activate"
    }else {
        return ""
    }
}

</script>

<style scoped lang="scss">
.wishlist {
    display: flex;
    flex-direction: column;
    &--header {
        margin-top: 10px;
    }
    &--subheader {

    }
    &--filters {
        display: flex;
        justify-content: start;
        align-items: center;
        overflow: scroll;
        margin-top: 20px;
        &--button {
            font-size: 20px;
            white-space:nowrap;
            margin-right: 10px;
            padding: 10px;
            border-radius: 20px;
            border: none;
            background-color: var(--secondary-color-t9);
            color: var(--secondary-color-t3);
            &--activate {
                background-color: var(--primary-color-t4);
                color: var(--primary-color-t9)
            }
        }:active {
                background-color: var(--primary-color-t4);
                color: var(--primary-color-t9)
            }
    }::-webkit-scrollbar {
        width: 0;
    }
    &--add {
        margin-top: 10px;
        &--button {
            width: 100%;
            font-size: 20px;
            padding: 5px;
            border-radius: 10px;
            border: none;
            background-color: var(--primary-color);
        }
    }
    &--items {
        margin-top: 20px;
        &--card {
            background-color: var(--bg-color-elements);
            padding: 10px;
            margin-bottom: 10px;
            display: flex;
            flex-direction: column;
            align-items: start;
            height: 100%;
            border-radius: 10px;
            width: 100%;
            &--cover{
                height:200px;
                width:100%;
                background-size:cover;
                background-position:center;
                border-radius:8px;
                margin-bottom:10px;
                &--row {
                    margin-top: 5px;
                    display: flex;
                    justify-content: space-between;
                    &--badge {
                        background-color: var(--secondary-color-t7); 
                        padding: 5px;
                        border-radius: 15px;
                    }
                }
            }
            &--image {
                height: 80px;
                width: 80px;
                border-radius: 5px;
            }
            &--name {
                margin: 0 0 0 10px; 
                display: flex; 
                flex-direction: column; 
                justify-content: space-between;
            }
            &--icon {
                display: flex; 
                flex-direction: column; 
                justify-content: end; 
                align-items: end;
                height: 100%
            }
            &--buy {
                width: 100%;
                &--button {
                    width: 100%;
                    padding: 10px;
                    font-size: 20px;
                    border-radius: 15px;
                    background-color: var(--primary-color);
                    border: none;
                }
            }
        }
    }
}
</style>