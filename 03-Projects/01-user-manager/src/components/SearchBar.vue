<script setup>

import { ref } from 'vue'

const searched = ref()

</script>

<template>
    <div class="wrapper">
        <div class="search-bar">
            <input v-model="searched" type="text" name="" id="search" placeholder="Keresés...">
        </div>
    </div>
</template>

<style>

.wrapper {
    display:flex;
    align-items: center;
    justify-content: center;
}

</style>