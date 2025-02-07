import { API_BASE } from "../../../assets/config.js";
export async function getUsers() {
    const response = await fetch(`${API_BASE}/users/`);
    const data = await response.json();
    return data;
}