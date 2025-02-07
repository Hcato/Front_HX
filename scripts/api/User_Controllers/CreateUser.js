import { API_BASE } from "../../../assets/config.js";
export async function createUser(data) {
    const response = await fetch(`${API_BASE}/users/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return await response.json();
}