import { API_BASE } from "../../../assets/config.js";

export async function deleteProduct(id) {
    const response = await fetch(`${API_BASE}/products/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error(`Error ${response.status}: No se pudo eliminar el producto.`);
    }

    return true; 
}