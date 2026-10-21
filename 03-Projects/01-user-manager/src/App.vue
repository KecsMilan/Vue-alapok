<script setup>

import { useUserStore } from '../store/user.js';
import UserTable from './components/UserTable.vue';

const { fetchUsers } = useUserStore();

try{
  fetchUsers()
} catch (error) {
  console.error("Error fetching users:",error)
}

</script>

<template>
  <div class="container">
    <UserTable />
  </div>
</template>

<style scoped>

</style>
