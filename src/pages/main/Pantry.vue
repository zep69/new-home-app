<template>
    <div class="pantry">
        <div class="pantry--header">
            <h2>Склад и запасы</h2>
            <span style="font-size: 12px;">40 предметов</span>
        </div>
        <div>
            <span style="font-size: 12px;">Информация о запасах</span>
        </div>
        <div class="pantry--filters">
            <button class="pantry--filters--button">Все предметы</button>
            <button class="pantry--filters--button">Кухня</button>
            <button class="pantry--filters--button">Ванная</button>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.pantry {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    &--header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &--filters {
        display: flex;
        justify-content: start;
        align-items: start;
        margin-top: 10px;
        &--button {
            padding: 10px;
            font-size: 20px;
            border: none;
            border-radius: 20px;
            margin-right: 10px;
            background-color: var(--secondary-color-t9);
            color: var(--secondary-color-t3);
        }
    }
}
</style>