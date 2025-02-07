import { ShortPollingUsers } from "../core/shortUser.js";
import { updateUserHandler } from "../Handlers/User_Handlers/UpdateUser.js";
import { createUserHandler } from "../Handlers/User_Handlers/CreateUser.js";
import { LongPollingUser } from "../core/LongUserById.js";
import { DeleteUser } from "../Handlers/User_Handlers/DeleteUser.js";

document.addEventListener("DOMContentLoaded", () => {
    ShortPollingUsers();
    const updateUserButton = document.getElementById("updateUserButton");
    updateUserButton.addEventListener("click", updateUserHandler);
    const createUserButton = document.getElementById("createUserButton");
    createUserButton.addEventListener("click", createUserHandler);
    const getUserButton = document.getElementById("getUserButton");
    getUserButton.addEventListener("click", () => LongPollingUser());
    const deleteUserButton = document.getElementById("deleteUserButton");
    deleteUserButton.addEventListener("click", DeleteUser);
});
