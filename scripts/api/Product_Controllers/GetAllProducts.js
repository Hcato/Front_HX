import { API_BASE_2 } from "../../../assets/config.js";

export async function getProducts() {
    const response = await fetch(`${API_BASE_2}/products/`);
    const data = await response.json();
    console.log(data);
    return data;
}