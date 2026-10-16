import { ref } from "vue";
import {deleteUser, getUsers} from "../APIs/userAPI.js"

const users = ref([])

export function useUserStore() {
    async function fetchUsers() {
        users.value = await getUsers();
    }
    async function removeUser(id) {
        await deleteUser(id);
        users.value = users.value.filter(user => user.id != id)
    }
    return {
        users,
        fetchUsers,
        removeUser
    }
}