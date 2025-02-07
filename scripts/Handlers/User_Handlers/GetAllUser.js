import { getUsers } from "../../api/User_Controllers/GetAllUser.js";
import { clearInputs } from "../../core/utils.js";
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