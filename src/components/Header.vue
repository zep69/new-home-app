<template>
    <div style="display: flex; justify-content: center;">
        <div class="header">
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
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss" >
 .header {
    margin: 10px;
    padding: 10px;
    height: 70px;
    width: 90vw;
    background-color: var(--bg-color-elements);
    border-radius: 30px;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
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