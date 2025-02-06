import { createProduct, updateProduct, getProducts } from '../api/Product_Controller.js';
import { clearInputs } from '../core/utils.js';

export async function createProductHandler() {
    const name = document.getElementById("productName").value;
    const price = parseFloat(document.getElementById("productPrice").value);

    if (!name || isNaN(price)) {
        alert("Por favor, ingresa un nombre y un precio válidos.");
        return;
    }

    const data = { name, price };

    try {
        const result = await createProduct(data);
        alert(`Producto creado: ${JSON.stringify(result)}`);
        clearInputs("productName", "productPrice");
    } catch (error) {
        console.error("Error al crear el producto:", error);
        alert("Hubo un error al crear el producto.");
    }
}

export function getProductsHandler() {
    getProducts()
        .then((data) => {
            const productContainer = document.getElementById("productResult");
            productContainer.innerHTML = ""; 

            if (data && Array.isArray(data.Productos) && data.Productos.length > 0) {
                data.Productos.forEach(product => {
                    const productElement = document.createElement("p");
                    productElement.textContent = `ID: ${product.Id} | Nombre: ${product.Name} | Precio: $${product.Price}`;
                    productContainer.appendChild(productElement);
                });
            } else {
                productContainer.textContent = "No hay productos registrados.";
            }
        })
        .catch((error) => {
            console.error("Error al obtener los productos:", error);
            const productContainer = document.getElementById("productResult");
            productContainer.textContent = "Hubo un error al obtener los productos.";
        });
}

export async function updateProductHandler() {
    const id = document.getElementById("updateProductId").value;
    const name = document.getElementById("updateProductName").value;
    const price = parseFloat(document.getElementById("updateProductPrice").value);

    if (!id || !name || isNaN(price)) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    const data = {name,price}
    try {
        const updatedUser = await updateProduct(id,data);

        alert(`Producto actualizado: ${JSON.stringify(updatedUser)}`);
        clearInputs("updateProductId", "updateProductName", "updateProductPrice");
    } catch (error) {
        console.error("Error al actualizar el producto:", error);
        alert("Hubo un error al actualizar el producto.");
    }
}
