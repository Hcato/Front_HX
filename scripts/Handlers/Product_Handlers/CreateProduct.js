import { createProduct } from "../../api/Product_Controllers/CreateProduct.js";
import { clearInputs } from "../../core/utils.js";

export async function createProductHandler() {
    const name = document.getElementById("productName").value;
    const price = parseFloat(document.getElementById("productPrice").value);
    const ProductContainer = document.getElementById("Operation");
    ProductContainer.innerHTML = "";

    if (!name || isNaN(price)) {
        alert("Por favor, ingresa un nombre y un precio válidos.");
        return;
    }

    const data = { name, price };

    try {
        const result = await createProduct(data);
        ProductContainer.textContent= "Producto creado";
        clearInputs("productName", "productPrice");
    } catch (error) {
        console.error("Error al crear el producto:", error);
        alert("Hubo un error al crear el producto.");
    }
}