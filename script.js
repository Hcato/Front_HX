const API_BASE = "http://127.0.0.1:8080";

async function createUser() {
    const name = document.getElementById("userName").value;
    const lastname = document.getElementById("userLastname").value;

    const response = await fetch(`${API_BASE}/users/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, lastname }),
    });

    const data = await response.json();
    alert(`Usuario creado: ${JSON.stringify(data)}`);
    clearInputs("userName", "userLastname");
}

async function getUsers() {
    const response = await fetch(`${API_BASE}/users/`);
    const data = await response.json();

    const userContainer = document.getElementById("userResult");
    userContainer.innerHTML = ""; 

    if (data.Users && data.Users.length > 0) {
        data.Users.forEach(user => {
            const userElement = document.createElement("p");
            userElement.textContent = `ID: ${user.Id} | Nombre: ${user.Name} ${user.Lastname}`;
            userContainer.appendChild(userElement);
        });
    } else {
        userContainer.textContent = "No hay usuarios registrados.";
    }
}


async function createProduct() {
    const name = document.getElementById("productName").value;
    const price = parseFloat(document.getElementById("productPrice").value);

    if (!name || isNaN(price)) {
        alert("Por favor, ingrese un nombre válido y un precio numérico.");
        return;
    }

    const response = await fetch(`${API_BASE}/products/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price }) 
    });

    const data = await response.json();
    alert(`Producto creado: ${JSON.stringify(data)}`);
    clearInputs("productName", "productPrice"); 
}

async function getProducts() {
    const response = await fetch(`${API_BASE}/products/`);
    const data = await response.json();

    const productContainer = document.getElementById("productResult");
    productContainer.innerHTML = ""; // Limpiar el contenido previo

    if (data.Productos && data.Productos.length > 0) {
        data.Productos.forEach(product => {
            const productElement = document.createElement("p");
            productElement.textContent = `ID: ${product.Id} | Nombre: ${product.Name} | Precio: $${product.Price}`;
            productContainer.appendChild(productElement);
        });
    } else {
        productContainer.textContent = "No hay productos registrados.";
    }
}
async function updateUser() {
    const id = document.getElementById("updateUserId").value;
    const name = document.getElementById("updateUserName").value;
    const lastname = document.getElementById("updateUserLastname").value;

    if (!id || !name || !lastname) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    const response = await fetch(`${API_BASE}/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, lastname })
    });

    const data = await response.json();
    alert(`Usuario actualizado: ${JSON.stringify(data)}`);
    clearInputs("updateUserId", "updateUserName", "updateUserLastname");
}

async function deleteUser() {
    const id = document.getElementById("deleteUserId").value;

    if (!id) {
        alert("Ingrese un ID válido.");
        return;
    }

    const response = await fetch(`${API_BASE}/users/${id}`, {
        method: "DELETE"
    });

    if (response.ok) {
        alert(`Usuario con ID ${id} eliminado.`);
        clearInputs("deleteUserId");
    } else {
        alert("Error al eliminar usuario.");
    }
}

async function updateProduct() {
    const id = document.getElementById("updateProductId").value;
    const name = document.getElementById("updateProductName").value;
    const price = parseFloat(document.getElementById("updateProductPrice").value);

    if (!id || !name || isNaN(price)) {
        alert("Todos los campos son obligatorios y el precio debe ser numérico.");
        return;
    }

    const response = await fetch(`${API_BASE}/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price })
    });

    const data = await response.json();
    alert(`Producto actualizado: ${JSON.stringify(data)}`);
    clearInputs("updateProductId", "updateProductName", "updateProductPrice"); 
}

async function deleteProduct() {
    const id = document.getElementById("deleteProductId").value;

    if (!id) {
        alert("Ingrese un ID válido.");
        return;
    }

    const response = await fetch(`${API_BASE}/products/${id}`, {
        method: "DELETE"
    });

    if (response.ok) {
        alert(`Producto con ID ${id} eliminado.`);
        clearInputs("deleteProductId");
    } else {
        alert("Error al eliminar producto.");
    }
}
function clearInputs(...ids) {
    ids.forEach(id => {
        const input = document.getElementById(id);
        if (input) input.value = "";
    });
}

