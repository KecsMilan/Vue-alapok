<script setup>

import GuitarImage from './GuitarImage.vue';

defineProps({
    guitar: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <div>
        <div class="left-column">
            <GuitarImage :title="guitar.title"/>
        </div>
        <div class="right-column"></div>
    </div>
</template>

<style scoped>
</style>