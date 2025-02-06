import { updateUser,createUser,getUsers, getUserById } from "../api/User_Controller.js";
import { clearInputs } from "../core/utils.js";


export async function createUserHandler() {
    const name = document.getElementById("userName").value;
    const lastname = document.getElementById("userLastname").value;

    if (!name || !lastname) {
        alert("Por favor, ingresa un nombre y un apellido válidos.");
        return;
    }

    const data = { name,lastname};

    try {
        const result = await createUser(data);
        alert(`Usuario creado: ${JSON.stringify(result)}`);
        clearInputs("userName", "userLastname");
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        alert("Hubo un error al crear el usuario.");
    }
}

export function getUsersHandler() {
    getUsers()
        .then((data) => {
            const userContainer = document.getElementById("userResult");
            userContainer.innerHTML = ""; 

            if (data && Array.isArray(data.Users) && data.Users.length > 0) {
                data.Users.forEach(user => {
                    const userElement = document.createElement("p");
                    userElement.textContent = `ID: ${user.Id} | Nombre: ${user.Name} ${user.Lastname}`;
                    userContainer.appendChild(userElement);
                    clearInputs("getuserId");
                });
            } else {
                userContainer.textContent = "No hay usuarios registrados.";
            }
        })
        .catch((error) => {
            console.error("Error al obtener los usuarios:", error);
            const userContainer = document.getElementById("userResult");
            userContainer.textContent = "Hubo un error al obtener los usuarios.";
        });
}

export function getUserIdHandler(userId) {
    getUserById(userId)
        .then((data) => {
            const userContainer = document.getElementById("userIdResult");
            userContainer.innerHTML = ""; 

            if (data && data.user) {
                const user = data.user;
                userContainer.textContent = `ID: ${user.Id} | Nombre: ${user.Name} | Apellido: ${user.Lastname}`;
            } else {
                userContainer.textContent = "No se encontró el usuario.";
            }
        })
        .catch((error) => {
            console.error("Error al obtener el usuario:", error);
            const userContainer = document.getElementById("userIdResult");
            userContainer.textContent = "Hubo un error al obtener el usuario.";
        });
}

export async function updateUserHandler() {
    const id = document.getElementById("updateUserId").value;
    const name = document.getElementById("updateUserName").value;
    const lastname = document.getElementById("updateUserLastname").value;

    if (!id || !name || !lastname) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    try {
        const updatedUser = await updateUser(id, name, lastname);

        alert(`Usuario actualizado: ${JSON.stringify(updatedUser)}`);
        clearInputs("updateUserId", "updateUserName", "updateUserLastname");
    } catch (error) {
        console.error("Error al actualizar el usuario:", error);
        alert("Hubo un error al actualizar el usuario.");
    }
}