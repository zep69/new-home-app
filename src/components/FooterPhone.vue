<template>
    <div class="footer">
        <div class="footer--nav">
            <button :class="['footer--nav--btn', returnActiveClass('/main/profile')]" @click="$router.push('/main/profile')">
                <i class="mdi mdi-account footer--nav--btn--icon"></i>
                <span>Профиль</span>
            </button>
            <button :class="['footer--nav--btn', returnActiveClass('/main/family')]" @click="$router.push('/main/family')">
                <i class="mdi mdi-account-group footer--nav--btn--icon"></i>
                <span>Семья</span>
            </button>
            <button :class="['footer--nav--btn', returnActiveClass('/main/budget')]" @click="$router.push('/main/budget')">
                <i class="mdi mdi-chart-donut footer--nav--btn--icon "></i>
                <span>Бюджет</span>
            </button>
            <button :class="['footer--nav--btn', returnActiveClass('/main/wishlist')]" @click="$router.push('/main/wishlist')">
                <i class="mdi mdi-format-list-checks footer--nav--btn--icon"></i>
                <span>Вишлист</span>
            </button>
            <button :class="['footer--nav--btn', returnActiveClass('/main/pantry')]" @click="$router.push('/main/pantry')">
                <i class="mdi mdi-archive footer--nav--btn--icon"></i>
                <span>Кладовая</span>
            </button>

        </div>

    </div>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router'

    const route = useRoute()

    console.log(route.path)  

    function returnActiveClass(routePath : string):string{
        if(routePath === route.path){
            return 'footer--nav--btn--active' 
        }else {
            return ''
        }
    }
</script>

<style scoped lang="scss">
.footer {
    height: 100px;
    background-color: var(--bg-color-elements);    
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    color: white;
    box-shadow: 0px -18px 34px -8px rgba(0,0,0,0.36);
    &--nav {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 20px;
        &--btn {
            background: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: var(--text-color);
            transition: 250ms;
            outline: none;
            border: none;
            -webkit-tap-highlight-color: transparent;
            &--icon {
                font-size: 30px;
            }
            &--active {
                color: var(--primary-color);
                transform: translateY(-10px) scale(1.1);
                transition: 250ms;
            }
            
        }
    }
}
</style>