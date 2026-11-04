<script setup>

import { ref } from 'vue'

const isVisible = ref(false)

const showForm = () => {
    isVisible.value = true
}

</script>

<template>
    <button 
    @click="showForm"
    v-show="!isVisible"
    >Create new User</button>
    <form 
    v-show="isVisible"
    action="">
        <div class="mb-3">
            <label for="firstName">First Name</label>
            <input 
            class="form-control" 
            name="firstName" 
            id="firstName" 
            required>
        </div>
        <div class="mb-3">
            <label for="lastName">Last Name</label>
            <input 
            class="form-control" 
            type="text" 
            name="lastName" 
            id="lastName" 
            required
            >
        </div>
        <div class="mb-3">
            <label for="emailAddress">E-mail</label>
            <input 
            class="form-control" 
            type="text" 
            name="emailAddress" 
            id="emailAddress" 
            required
            >
        </div>
    </form>
</template>

<style>
</style>