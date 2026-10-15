<script setup>

/* 

Logikát magam állítottam össze, css-el besegített az AI.

*/

import { ref, computed } from 'vue'

const userName = ref('')
const password = ref('')
const confirmPassword = ref('')

const uNCheck = computed(() => {
    const correct = userName.value !== '' 
    && userName.value.length >= 5 
    && userName.value !== password.value
    ? '' : 'Username must be at least 5 characters long and different from password'  
    return correct
})

const pwdCheck = computed(() => {
    const correct = password.value !== '' 
    && password.value.length >= 8 
    && password.value !== userName.value 
    ? '' : 'Password must be at least 8 characters long and different from username'  
    return correct
})

const confPwdCheck = computed(() => {
    const correct = password.value !== '' 
    && confirmPassword.value === password.value 
    ? '' : 'Confirm password must be at least 8 characters long and match with password'  
    return correct
})

const handleSubmit = () => {
    if(uNCheck.value === '' && pwdCheck.value === '' && confPwdCheck.value === '') {
        alert(`username: ${userName.value}\npassword: ${password.value}`)
        userName.value = '' 
        password.value = ''
        confirmPassword.value = ''  
    }
    else return
}

</script>

<template>
    <div class="form-wrapper">
        <div class="form-main">
            <div class="form-header">
                <h1>👤 User Form</h1>
            </div>
            <form @submit.prevent="handleSubmit">
                <div class="field">
                    <label for="username">Username</label>
                    <input id="username" v-model="userName" type="text" placeholder="Min. 5 karakter">
                    <p class="notification">{{ uNCheck }}</p>
                </div>

                <div class="field">
                    <label for="password">Password</label>
                    <input id="password" v-model="password" type="password" placeholder="Min. 8 karakter">
                    <p class="notification">{{ pwdCheck }}</p>
                </div>

                <div class="field">
                    <label for="confirm">Confirm Password</label>
                    <input id="confirm" v-model="confirmPassword" type="password" placeholder="Ismételd meg a jelszót">
                    <p class="notification">{{ confPwdCheck }}</p>
                </div>

                <button type="submit">Küldés 🚀</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.form-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 24px;
    box-sizing: border-box;
    background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
}

.form-main {
    width: 100%;
    max-width: 440px;
    padding: 32px 36px 36px;
    background-color: #ffffff;
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(30, 80, 140, 0.25);
}

.form-header h1 {
    margin: 0 0 24px;
    text-align: center;
    font-size: 1.8rem;
    color: #1e3a5f;
}

form {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.field {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 6px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #1e3a5f;
}

input {
    padding: 12px 16px;
    font-size: 1rem;
    color: #1e3a5f;
    background-color: #f4f9ff;
    border: 2px solid #d0e4f7;
    border-radius: 14px;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
}

input::placeholder {
    color: #8aa4bf;
}

input:focus {
    background-color: #ffffff;
    border-color: #4a90e2;
    box-shadow: 0 0 0 4px rgba(74, 144, 226, 0.2);
}

.notification {
    min-height: 2.4em; /* hogy ne ugráljon az űrlap */
    margin: 6px 2px 10px;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.2;
    color: #c62828;
}

button {
    margin-top: 8px;
    padding: 14px;
    font-size: 1rem;
    font-weight: 700;
    color: #ffffff;
    background: linear-gradient(135deg, #4a90e2, #357abd);
    border: none;
    border-radius: 14px;
    cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s;
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(53, 122, 189, 0.4);
}

button:active {
    transform: translateY(0);
}
</style>
