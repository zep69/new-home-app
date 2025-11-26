<template>
    <div class="footer">
        <div class="content">
            <div>
                <slot class="container-container" name="start"></slot>
            </div>
            <div>
                <slot class="container-container" name="center"></slot>
            </div>
            <div>
                <slot class="container-container" name="end"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.footer {
    height: 40px;
    background-color: var(--bg-color-elements);    
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #111;
    color: white;
}
.content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 10px;
}
.content-container {
    display: flex;
    height: 100%;
}
</style>