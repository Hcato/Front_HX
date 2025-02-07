import { API_BASE } from "../../../assets/config.js";

export async function deleteUser(id) {
    const response = await fetch(`${API_BASE}/users/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error(`Error ${response.status}: No se pudo eliminar el usuario.`);
    }

    return true; 
}