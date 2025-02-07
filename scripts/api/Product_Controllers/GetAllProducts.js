import { API_BASE } from "../../../assets/config.js";

export async function getProducts() {
    const response = await fetch(`${API_BASE}/products/`);
    const data = await response.json();
    return data;
}