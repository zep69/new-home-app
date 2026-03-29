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
            <button class="budget--actions--button">
                <i class="mdi mdi-plus"></i>
                Добавить траты
            </button>
            <button class="budget--actions--button">
                <i class="mdi mdi-wallet-plus"></i>
                Добавить прибыль
            </button>
            <button class="budget--actions--button">
                <i class="mdi mdi-cash-fast"></i>
                Сделать перевод
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">

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
            &--expense {
                color: var(--primary-color);
                background-color: var(--primary);
            }
        }
    }
}
</style>