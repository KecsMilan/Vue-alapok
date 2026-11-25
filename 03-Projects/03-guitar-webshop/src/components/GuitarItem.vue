<script setup>

import GuitarImage from './GuitarImage.vue';
import GuitarDetail from './GuitarDetail.vue'

defineProps({
    guitar: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <div class="container">
        <div class="left-column">
            <GuitarImage :title="guitar.title"/>
        </div>
        <div class="right-column">
            <GuitarDetail :title="guitar.title" :price="guitar.price"/>
        </div>
    </div>
</template>

<style scoped>
.container {
    display:flex;
    gap: 25px;
}

.left-column {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>