<script setup>
    import {ref} from 'vue'

    import InputField from './components/InputField.vue';
    import MainNavigation from './components/MainNavigation.vue';
    import SiteFooter from './components/SiteFooter.vue';
    import SiteContent from './components/SiteContent.vue';

    const title = ref('VUE')

    setTimeout(()=>{
        title.value = "REACT"
    }, 3000)

    const logMessage = (name) => {
        console.log('Input field changed', name)
    }

</script>

<template> 
    <header>
        <MainNavigation :title="title"/>
        <!-- <MainNavigation /> -->
    </header>
    <main>
        <SiteContent />
        <InputField @on-change="logMessage"/>
    </main>
    <footer>
        <SiteFooter />
    </footer>
</template>

<style scoped>

</style>