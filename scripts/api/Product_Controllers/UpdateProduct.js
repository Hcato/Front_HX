import { API_BASE } from "../../../assets/config.js";

export async function updateProduct(id, data) {
    const response = await fetch(`${API_BASE}/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return await response.json();
}