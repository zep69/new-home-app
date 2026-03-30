<template>
    <div class="budget">
        <div class="budget--total_balance">
            <span>Ваш баланс</span>
            <h1>777777,77 ₽</h1>
        </div>
        <div class="budget--chart">
            <h2>Chart block</h2>
        </div>
        <div class="budget--actions">
            <button class="budget--actions--button budget--actions--button--expense">
                <i class="mdi mdi-plus"></i>
                Добавить траты
            </button>
            <button class="budget--actions--button budget--actions--button--profit">
                <i class="mdi mdi-wallet-plus"></i>
                Добавить прибыль
            </button>
            <button class="budget--actions--button">
                <i class="mdi mdi-cash-fast"></i>
                Сделать перевод
            </button>
        </div>
        <div class="budget--types">
            <div class="budget--types--item">
                <div class="budget--types--item--header">
                    <i class="mdi mdi-basket budget--types--item--header--icon"> </i>
                    <span class="budget--types--item--header--percent">20%</span>
                </div>
                <div class="budget--types--item--body">
                    <span>Продукты</span>
                    <h3>6543 ₽</h3>
                </div>
            </div>
            <div class="budget--types--item">
                <div class="budget--types--item--header">
                    <i class="mdi mdi-shower budget--types--item--header--icon"> </i>
                    <span class="budget--types--item--header--percent">20%</span>
                </div>
                <div class="budget--types--item--body">
                    <span>Продукты</span>
                    <h3>400 ₽</h3>
                </div>
            </div>
        </div>
        <div class="budget--transactions">
            <div class="budget--transactions--header">
                <h2>Последние транзакции</h2>
                <span class="budget--transactions--header--seeall">Все</span>
            </div>
            <div class="budget--transactions--body">
                <div v-for="(item, index) in transactions" :class="[`budget--transactions--body--item` ,checkInde(index)]">
                    <div style="display:flex;align-items:center">
                        
                        <div style="padding: 5px; font-size: 24px; width: 40px; height: 40px; background-color: var(--bg-color); display: flex; justify-content: center; align-items: center; border-radius: 5px;">
                            <i :class="[`mdi`, item.icon]"></i>
                        </div>
                        <div style="display: flex; flex-direction: column; margin-left: 10px;">
                            <span>{{ item.name }}</span>
                            <span style="font-size: 10px;">{{ new Date(item.date).toLocaleDateString('ru-RU').substring(0,10) }}</span>
                        </div>
                        
                    </div>
                    <div v-if="item.type" class="budget--transactions--body--item--plus">
                        {{ item.amount }}₽
                    </div>
                    <div v-else >
                        -{{ item.amount }}₽
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'



type Transaction = {
    name:string,
    date: Date,
    amount: number,
    icon: string,
    type: boolean
}

const transactions = ref<Transaction[]>([
    {
        name:'Продукты',
        date : new Date(),
        amount: 500,
        icon: 'mdi-home',
        type:false
    },
    {
        name:'Зпшка Насти',
        date : new Date(),
        amount: 90000,
        icon: 'mdi-cash',
        type:true
    },
    {
        name:'Приколы кошакам',
        date : new Date(),
        amount: 1240,
        icon: 'mdi-cat',
        type:false
    },
    {
        name:'Большой вернул долг',
        date : new Date(),
        amount: 2500,
        icon: 'mdi-cash-fast',
        type:true
    },
])

function checkInde(index:number):string{
    const tempIndex = index+1
    const checkFix = index % 2 
    if(checkFix){
        return 'budget--transactions--body--item--bg-2'
    }else {
        return 'budget--transactions--body--item--bg-1'
    }
}
</script>

<style scoped lang="scss">
.budget {
    display: flex;
    justify-content: center;
    flex-direction: column;
    &--total_balance {
        display: flex;
        flex-direction: column;
    }
    &--chart {
        width: 100%;
        padding: 10px;
        background: var(--primary-color-t7);
        margin-top: 10px;
        border-radius: 15px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &--actions {
        display: flex;
        justify-content: start;
        overflow: scroll;
        margin-top: 10px;
        max-width: 100%;
        &--button {
            border-radius: 15px;
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 5px;
            max-height: 45px;
            white-space: nowrap;
            border: none;
            margin-right: 15px;
            &--expense {
                color: var(--primary-color);
                background-color: var(--primary-color-t9 );
            }
            &--profit {
                color: var(--secondary-color);
                background-color: var(--secondary-color-t5);
            }
        }
    }::-webkit-scrollbar {
        width: 0;
    }
    &--types {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        &--item {
            background-color: var(--bg-color-elements);
            width: 50%;
            border-radius: 10px;
            margin: 2px;
            padding: 10px;
            &--header {
                display: flex; 
                justify-content: space-between; 
                align-items: start;
                &--icon {
                    color: var(--secondary-color);
                    background-color: var(--secondary-color-t5);
                    padding: 5px;
                    font-size: 20px;
                    border-radius: 50%;
                    height: 40px;
                    width: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                &--percent {
                    font-size: 12px;
                    font-weight: 700;
                }
            }
            &--body {
                display: flex;
                flex-direction: column;
            }
        }
    }
    &--transactions {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        &--header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &--seeall {
                color: var(--primary-color);
                font-size: 15px;
                text-decoration: underline;
            }
        }
        &--body {
            margin-top: 10px;
            &--item {
                display: flex;
                justify-content: space-between;
                border-radius: 10px;
                padding: 10px;
                align-items: center;
                margin-bottom: 10px;
                &--bg-1{
                    background-color: var(--bg-color-elements);
                }
                &--bg-2 {
                    background-color: none;
                }
                &--plus {
                    color: var(--primary-color);
                }
            }
        }
    }
}
</style>