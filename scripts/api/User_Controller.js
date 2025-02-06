const API_BASE = "http://127.0.0.1:8080";

export async function createUser(data) {
    const response = await fetch(`${API_BASE}/users/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return await response.json();
}

export async function getUsers() {
    const response = await fetch(`${API_BASE}/users/`);
    const data = await response.json();
    return data;
}

export async function getUserById(id) {
    const response = await fetch(`${API_BASE}/users/${id}`);
    if (!response.ok) {
        throw new Error("Error al obtener el usuario");
    }
    const data = await response.json();
    return data;
}

export async function updateUser(id, name, lastname) {
    const response = await fetch(`${API_BASE}/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, lastname })
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json(); 
}