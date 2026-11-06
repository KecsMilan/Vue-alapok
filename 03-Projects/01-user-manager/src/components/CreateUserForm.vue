<script setup>

import { ref, reactive } from 'vue'
import { useUserStore } from '../../store/user'

const { addUser } = useUserStore()

const createUserForm = ref()

const isVisible = ref(false)
const userFormDataInitialState = reactive({
    firstName: '',
    lastName: '',
    emailAddress: ''
})

const userFormData = reactive({...userFormDataInitialState})

const showForm = () => {
    isVisible.value = true
}

const handleSaveClick = async () => {
    try{
        if(createUserForm.value.checkValidity())
        await addUser(userFormData)
        Object.assign(userFormData, userFormDataInitialState)    
        isVisible.value = false
    } catch (error)
    {
        alert(error)
    }
    
}

const handleCancelClick = () => {
    isVisible.value = false
}

</script>

<template>
    <button 
    @click="showForm"
    v-show="!isVisible"
    >Create new User</button>
    <form 
    v-show="isVisible"
    action="" ref="createUserForm">
        <div class="mb-3">
            <label for="firstName">First Name</label>
            <input 
            class="form-control" 
            name="firstName" 
            id="firstName"
            v-model="userFormData.firstName" 
            required>
        </div>
        <div class="mb-3">
            <label for="lastName">Last Name</label>
            <input 
            class="form-control" 
            type="text" 
            name="lastName" 
            id="lastName"
            v-model="userFormData.lastName" 
            required
            >
        </div>
        <div class="mb-3">
            <label for="emailAddress">E-mail</label>
            <input 
            class="form-control" 
            type="email" 
            name="emailAddress" 
            id="emailAddress" 
            v-model="userFormData.emailAddress"
            required
            >
        </div>
        <div class="mb-3">
            <button class="btn btn-primary" @click.prevent="handleSaveClick">Save</button>
            <button class="btn btn-secondary" @click="handleCancelClick">Cancel</button>
        </div>
    </form>
</template>

<style>
</style>