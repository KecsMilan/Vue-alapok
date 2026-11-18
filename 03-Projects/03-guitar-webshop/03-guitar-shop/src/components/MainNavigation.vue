<script setup>
</script>

<template>
    <nav>
        <ul>
            <li>
                <router-link class="green" :to="{name: 'guitarList'}">Guitar</router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.nav {
    background-color: var(--dark);
}
</style>