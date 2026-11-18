<script setup>
</script>

<template>
    <nav class="nav">
        <ul>
            <li>
                <router-link :to="{name: 'guitarList'}">Guitar</router-link>
            </li>
            <li>
                <router-link :to="{name: 'cart'}">Cart</router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.nav {
    background-color: var(--dark);
}
</style>