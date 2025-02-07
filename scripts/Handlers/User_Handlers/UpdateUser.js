import { updateUser } from "../../api/User_Controllers/UpdateUser.js";
import { clearInputs } from "../../core/utils.js";

export async function updateUserHandler() {
    const id = document.getElementById("updateUserId").value;
    const name = document.getElementById("updateUserName").value;
    const lastname = document.getElementById("updateUserLastname").value;
    const userContainer = document.getElementById("Operation");
    userContainer.innerHTML = "";

    if (!id || !name || !lastname) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    try {
        const updatedUser = await updateUser(id, name, lastname);

        userContainer.textContent="Usuario actualizado";
        clearInputs("updateUserId", "updateUserName", "updateUserLastname");
    } catch (error) {
        console.error("Error al actualizar el usuario:", error);
        alert("Hubo un error al actualizar el usuario.");
    }
}