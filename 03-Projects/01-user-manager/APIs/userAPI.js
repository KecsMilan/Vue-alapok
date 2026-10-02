import { apiClient } from '../utils/apiClient'

const urlFragment = "users"

export async function getUsers() {
    const response = apiClient.get(urlFragment)
    return response.data;
}