<script setup>
    import {reactive, ref} from 'vue'

    import InputField from './components/InputField.vue';
    import MainNavigation from './components/MainNavigation.vue';
    import SiteFooter from './components/SiteFooter.vue';
    import SiteContent from './components/SiteContent.vue';

    const submitForm = () => {
        console.log("JSON", JSON.stringify(formData))
    }

    const formData = reactive({
        email: '',
        firstname: '',
        lastname: ''
    })

</script>

<template> 
    <header>
        <MainNavigation :title="title"/>
        <!-- <MainNavigation /> -->
    </header>
    <main>
        <SiteContent />

        <div class="formDiv">
            <InputField
                v-model="formData.email" 
                id="e-mail"
                type="email"
                placeholder="Enter your email"
                label="Email address:"
            />
            <!-- firstname -->
            <InputField 
                v-model="formData.firstname" 
                id="firstname"
                type="text"
                placeholder="Enter your firstname"
                label="Firstname:"
            />
            <!-- lastname -->
            <InputField 
                v-model="formData.lastname" 
                id="lastname"
                type="text"
                placeholder="Enter your lastname"
                label="Lastname:"
            />
            <button @click="submitForm">Submit</button>
        </div>
    </main>
        
    <footer>
        <SiteFooter />
    </footer>
</template>

<style scoped>

</style>