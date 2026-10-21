import { ref } from "vue";
import {deleteUser, getUsers, updateUser} from "../APIs/userAPI.js"

const users = ref([])

export function useUserStore() {
    async function fetchUsers() {
        users.value = await getUsers();
    }

    async function removeUser(id) {
        await deleteUser(id);
        users.value = users.value.filter(user => user.id != id)
    }
    
    async function modifyUser(updatedUser){
        const {id, ...userData} = updateUser
        const response = await updateUser(id, userData)
        user.value = users.value.map(u => u.id === id ? response : u)
    }

    return {
        users,
        fetchUsers,
        removeUser,
        modifyUser
    }
}