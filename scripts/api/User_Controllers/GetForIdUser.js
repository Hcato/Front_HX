import { API_BASE } from "../../../assets/config.js";
export async function getUserById(id) {
    const response = await fetch(`${API_BASE}/users/${id}`);
    if (!response.ok) {
        throw new Error("Error al obtener el usuario");
    }
    const data = await response.json();
    return data;
}