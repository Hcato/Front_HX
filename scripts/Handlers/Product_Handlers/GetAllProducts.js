import { getProducts } from "../../api/Product_Controllers/GetAllProducts.js";

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