import { createProductHandler, updateProductHandler } from "./Handlers/Product_Handler.js";
import { updateUserHandler, createUserHandler} from "./Handlers/User_Handler.js";
import { ShortPollingUsers } from "./core/shortUser.js";
import { ShortPollingProducts } from "./core/shortProduct.js";
import { LongPollingUser } from "./core/LongUserById.js";

document.addEventListener("DOMContentLoaded", () => {
    ShortPollingProducts()
    ShortPollingUsers()
    const createProductButton = document.getElementById("createProductButton");
    createProductButton.addEventListener("click", createProductHandler);
    const updateProductButton = document.getElementById("updateProductButton");
    updateProductButton.addEventListener("click", updateProductHandler);
    const updateUserButton = document.getElementById("updateUserButton");
    updateUserButton.addEventListener("click", updateUserHandler);
    const createUserButton = document.getElementById("createUserButton");
    createUserButton.addEventListener("click", createUserHandler);
    const getUserButton = document.getElementById("getUserButton");
    getUserButton.addEventListener("click", () => LongPollingUser());
});