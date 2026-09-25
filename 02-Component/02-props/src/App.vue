<script setup>
    import MainNavigation from './components/MainNavigation.vue';
    import SiteFooter from './components/SiteFooter.vue';
    import SideContent from './components/SideContent.vue';
</script>

<template> 
    <header>
        <MainNavigation title="My Vue App"/>
        <!-- <MainNavigation /> -->
    </header>
    <main>
        <SideContent />
    </main>
    <footer>
        <SiteFooter />
    </footer>
</template>

<style scoped>

</style>