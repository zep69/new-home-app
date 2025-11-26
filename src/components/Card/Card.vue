<template>
    <div class="card">
        <slot name="header">

        </slot>
        <slot name="body">

        </slot>
        <slot name="footer">

        </slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.card{
    background-color: var(--bg-color-elements);
    border-radius: 30px;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
</style>