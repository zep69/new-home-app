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
}
</style>