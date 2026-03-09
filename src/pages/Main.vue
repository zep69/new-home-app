<template>
    <div class="main-wrapper">
        <router-view class="router">

        </router-view>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';


</script>

<style scoped lang="scss">
.main-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
.router {
    width: 720px;
}

@media screen and (max-width: 480px) {
.router {
    width: 440px;
}
}
@media screen and (max-width: 768px) { 
    .router {
        width: 460px;
    }
}
</style>