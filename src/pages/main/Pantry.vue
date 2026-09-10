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
        <div class="pantry--items">
            <div class="pantry--items--item" v-for="item in items" :key="item.name">
                <div v-if="item.quantity < 3" class="pantry--items--item--badgelow">
                    Осталось мало!
                </div>
                <span class="pantry--items--item--name">
                    <span class="pantry--items--item--media">
                        <img
                            v-if="item.image"
                            :src="item.image"
                            :alt="item.name"
                            class="pantry--items--item--photo"
                            loading="lazy"
                            @error="item.image = ''"
                        />
                        <i v-else :class="['mdi', item.icon, 'pantry--items--item--icon']"></i>
                    </span>
                    {{ item.name }}
                </span>
                <span>{{ item.quantity }}</span>
            </div>
        </div>
    </div>
    <div class="plus-button" :class="{ 'plus-button--hidden': isPlusHidden }">
        <i class="mdi mdi-plus"></i>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isPlusHidden = ref(false);
let lastScrollY = 0;
let ticking = false;

function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY;
        // прячем при скролле вниз (и только когда уже немного проскроллили), показываем при скролле вверх
        if (delta > 5 && currentY > 60) {
            isPlusHidden.value = true;
        } else if (delta < -5) {
            isPlusHidden.value = false;
        }
        lastScrollY = currentY;
        ticking = false;
    });
}

onMounted(() => {
    lastScrollY = window.scrollY;
    window.addEventListener('scroll', onScroll, { passive: true });
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll);
});

const photo = (id: string) =>
    `https://images.unsplash.com/${id}?w=160&h=160&fit=crop&crop=entropy&auto=format&q=70`;

const items = ref([
    { name: 'Яйца', quantity: 12, category: 'Кухня', icon: 'mdi-egg', image: photo('photo-1587486913049-53fc88980cfc') },
    { name: 'Молоко', quantity: 2, category: 'Кухня', icon: 'mdi-bottle-soda', image: photo('photo-1550583724-b2692b85b150') },
    { name: 'Мыло', quantity: 5, category: 'Ванная', icon: 'mdi-hand-wash', image: photo('photo-1600857544200-b2f666a9a2ec') },
    { name: 'Шампунь', quantity: 3, category: 'Ванная', icon: 'mdi-bottle-tonic', image: photo('photo-1631729371254-42c2892f0e6e') },
    { name: 'Хлеб', quantity: 1, category: 'Кухня', icon: 'mdi-baguette', image: photo('photo-1509440159596-0249088772ff') },
    { name: 'Сыр', quantity: 4, category: 'Кухня', icon: 'mdi-cheese', image: photo('photo-1486297678162-eb2a19b0a32d') },
    { name: 'Туалетная бумага', quantity: 10, category: 'Ванная', icon: 'mdi-paper-roll', image: photo('photo-1584556812952-905ffd0c611a') },
    { name: 'Стиральный порошок', quantity: 2, category: 'Ванная', icon: 'mdi-washing-machine', image: photo('photo-1626806787461-102c1bfaaea1') }
])

</script>

<style scoped lang="scss">
.plus-button {
    position: fixed;
    bottom: 110px;
    right: 20px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color-t3);
    color: var(--secondary-color-t10);
    z-index: 1000;
    box-shadow: 0 0 5px  0px rgba(0, 0, 0, 0.2);
    transition: transform 0.25s ease, opacity 0.25s ease;
    &--hidden {
        transform: translateX(120px);
        opacity: 0;
        pointer-events: none;
    }
}
.pantry {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
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
    &--items {
        display: flex;
        flex-direction: column;
        gap: 10px;
        &--item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border-radius: 10px;
            background-color: var(--primary-color-t10);
            box-shadow: 0px 2px 7px 0px rgba(34, 60, 80, 0.3);
            position:relative;

            &--badgelow {
                position: absolute;
                top: 10px;
                right: 10px;
                color: rgb(130, 1, 1);
                font-size: 12px;
                font-weight: 800;
            }

            &--name {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            &--media {
                width: 70px;
                height: 70px;
                border-radius: 10px;
                overflow: hidden;
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--secondary-color-t9);
            }
            &--photo {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }
            &--icon {
                font-size: 22px;
                color: var(--secondary-color-t3);
            }
        }
    }
}
</style>
