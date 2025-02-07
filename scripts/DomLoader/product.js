import { ShortPollingProducts } from "../core/shortProduct.js";
import { createProductHandler } from "../Handlers/Product_Handlers/CreateProduct.js";
import { updateProductHandler } from "../Handlers/Product_Handlers/UpdateProduct.js";
import { DeleteProduct } from "../Handlers/Product_Handlers/DeleteProduct.js";

document.addEventListener("DOMContentLoaded", () => {
    ShortPollingProducts();
    const createProductButton = document.getElementById("createProductButton");
        createProductButton.addEventListener("click", createProductHandler);
        const updateProductButton = document.getElementById("updateProductButton");
        updateProductButton.addEventListener("click", updateProductHandler);
        const deleteProductButton = document.getElementById("deleteProductButton");
        deleteProductButton.addEventListener("click", DeleteProduct);
});
