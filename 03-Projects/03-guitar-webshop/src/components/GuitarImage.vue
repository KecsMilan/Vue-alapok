<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <img :src="`guitars/${title}.jpg`" alt="title" class="guitar_image">
</template>

<style scoped>
.guitar_image {
    height: 100px;
    padding-left: 10px;
}
</style>