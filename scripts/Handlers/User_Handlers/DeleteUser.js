import { deleteUser } from "../../api/User_Controllers/DeleteUser.js";
import { clearInputs } from "../../core/utils.js";

export async function DeleteUser() {
    const userContainer = document.getElementById("Operation");
    userContainer.innerHTML = "";
    const id = document.getElementById("deleteUserId").value.trim();
    if (!id || isNaN(id)) { 
        alert("Favor de ingresar un ID válido.");
        return;
    }

    try {
        const deleted = await deleteUser(id);
        if (deleted) {
            userContainer.textContent= "Usuario Eliminado";
            clearInputs("deleteUserId");
        } else {
            alert(`No se pudo eliminar el usuario con ID ${id}.`);
        }
    } catch (error) {
        console.error("Error al eliminar el user:", error);
        alert("Hubo un error al eliminar el user.");
    }
}
