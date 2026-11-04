<script setup>

import { defineProps,ref,watch } from "vue"
import { useUserStore } from "../../store/user"

const props = defineProps(
    {
        user: {
            type: Object,
            required: true
        }
    }
)

const userFormData = ref(props.user)
const { modifyUser } = useUserStore();

watch (
    () => props.user,
    (newUser) => {userFormData.value = {...newUser}}
)

const closeButton = ref()

const handleSaveButtonClick = async() => {
    try {
        await modifyUser(userFormData.value)
        closeButton.value.click()
    } catch (error){
        alert(error)
    }
}

</script>

<template>
    <!-- Modal -->
    <div class="modal fade"
    id="editUserModal" tabindex="-1" 
    aria-labelledby="editUserModalLabel" 
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="editUserModalLabel">Edit</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form action="">
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
                    required
                    v-model="userFormData.lastName">
                </div>
                <div class="mb-3">
                    <label for="emailAddress">E-mail</label>
                    <input 
                    class="form-control" 
                    type="text" 
                    name="emailAddress" 
                    id="emailAddress" 
                    required
                    v-model="userFormData.emailAddress">
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button 
            type="button" 
            class="btn btn-secondary" 
            data-bs-dismiss="modal"
            ref="closeButton">Close</button>
            <button 
            type="button" 
            class="btn btn-primary"
            @click="handleSaveButtonClick">Save changes</button>
        </div>
        </div>
    </div>
    </div>
</template>

<style>
</style>