import { deleteProduct } from "../../api/Product_Controllers/DeleteProduct.js";
import { clearInputs } from "../../core/utils.js";

export async function DeleteProduct() {
    const ProductContainer = document.getElementById("Operation");
    ProductContainer.innerHTML = "";
    const id = document.getElementById("deleteProductId").value.trim();
    if (!id || isNaN(id)) { 
        alert("Favor de ingresar un ID válido.");
        return;
    }

    try {
        const deleted = await deleteProduct(id);
        if (deleted) {
            ProductContainer.textContent=`Producto ${id} eliminado`
            clearInputs("deleteProductId");
        } else {
            alert(`No se pudo eliminar el producto con ID ${id}.`);
        }
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        alert("Hubo un error al eliminar el producto.");
    }
}
