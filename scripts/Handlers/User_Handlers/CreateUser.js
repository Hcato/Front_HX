import { createUser } from "../../api/User_Controllers/CreateUser.js";
import { clearInputs } from "../../core/utils.js";
export async function createUserHandler() {
    const name = document.getElementById("userName").value;
    const lastname = document.getElementById("userLastname").value;
    const userContainer = document.getElementById("Operation");
    userContainer.innerHTML = "";

    if (!name || !lastname) {
        alert("Por favor, ingresa un nombre y un apellido válidos.");
        return;
    }

    const data = { name,lastname};

    try {
        const result = await createUser(data);
        userContainer.textContent= "Usuario creado";
        clearInputs("userName", "userLastname", "Operation");
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        alert("Hubo un error al crear el usuario.");
    }
}