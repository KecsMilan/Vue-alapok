<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="main">
        <div class="title">
            <h2>{{ title }}</h2>
        </div>
        <div class="content">
            <p>${{ price }}</p>
        </div>
    </div>
</template>

<style scoped>
.main {
    height: 100px;
    padding-left: 10px;
}
</style>