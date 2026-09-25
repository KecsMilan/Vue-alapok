<script setup>
    import {ref} from 'vue'

    import InputField from './components/InputField.vue';
    import MainNavigation from './components/MainNavigation.vue';
    import SiteFooter from './components/SiteFooter.vue';
    import SideContent from './components/SideContent.vue';

    const title = ref('VUE')

    setTimeout(()=>{
        title.value = "REACT IS BETTER"
    }, 3000)

    const handleClick = () => {
        console.log("test")
    }

</script>

<template> 
    <header>
        <MainNavigation :title="title"/>
        <!-- <MainNavigation /> -->
    </header>
    <main>
        <SideContent />
        <InputField @on-input="handleClick"/>
    </main>
    <footer>
        <SiteFooter />
    </footer>
</template>

<style scoped>

</style>