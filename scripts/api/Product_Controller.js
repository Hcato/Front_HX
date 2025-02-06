const API_BASE = "http://127.0.0.1:8080";

export async function createProduct(data) {
    const response = await fetch(`${API_BASE}/products/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return await response.json();
}

export async function getProducts() {
    const response = await fetch(`${API_BASE}/products/`);
    const data = await response.json();
    return data;
}

export async function updateProduct(id, data) {
    const response = await fetch(`${API_BASE}/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return await response.json();
}

export async function deleteProduct(id) {
    const response = await fetch(`${API_BASE}/products/${id}`, {
        method: "DELETE",
    });
    return response.ok;
}

