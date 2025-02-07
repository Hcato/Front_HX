import { updateProduct } from "../../api/Product_Controllers/UpdateProduct.js";
import { clearInputs } from "../../core/utils.js";

export async function updateProductHandler() {
    const id = document.getElementById("updateProductId").value;
    const name = document.getElementById("updateProductName").value;
    const price = parseFloat(document.getElementById("updateProductPrice").value);
    const ProductContainer = document.getElementById("Operation");
    ProductContainer.innerHTML = "";

    if (!id || !name || isNaN(price)) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    const data = {name,price}
    try {
        await updateProduct(id,data);

        ProductContainer.textContent="Produccto Actualizado"
        clearInputs("updateProductId", "updateProductName", "updateProductPrice");
    } catch (error) {
        console.error("Error al actualizar el producto:", error);
        alert("Hubo un error al actualizar el producto.");
    }
}