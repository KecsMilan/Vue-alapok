<script setup>

import { ref, onMounted, remove } from 'vue'
import { useUserStore } from '../store/user.js';


const {users, fetchUsers, removeUser} = useUserStore();

try{
  fetchUsers()
} catch (error) {
  console.error("Error fetching users:",error)
}

const handleDeleteUser = async (userId) => {
  try{
    const confirmDelete = confirm("Are you sure you want to delete this user?");

    if(confirmDelete){
      await removeUser(userId);
    }
  } catch (error){
    console.error("Errror removing users:",error)
  }
}

</script>

<template>
  <table class="table table-striped">
    
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email Address</th>
        <th>-</th>
      </tr>
    </thead>
    
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.emailAddress }}</td>
        <td>
          <button class="btn btn-primary">Edit</button>
          <button class="btn btn-danger" @click="handleDeleteUser(user.id)">Delete</button>
        </td>
      </tr>
    </tbody>

  </table>
</template>

<style scoped>

</style>
