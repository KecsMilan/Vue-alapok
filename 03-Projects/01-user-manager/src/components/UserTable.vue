<script setup>
import { useUserStore } from '../../store/user';
import EditUserModal from './EditUserModal.vue';

const { users, removeUserm } = useUserStore();

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
          <button type="button" 
          class="btn btn-primary" 
          data-bs-toggle="modal" 
          data-bs-target="#editUserModal">
            Edit
          </button>
          <button class="btn btn-danger" @click="handleDeleteUser(user.id)">Delete</button>
        </td>
      </tr>
    </tbody>

  </table>
  <EditUserModal />
</template>

<style>
</style>