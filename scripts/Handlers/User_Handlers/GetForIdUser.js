import { getUserById } from "../../api/User_Controllers/GetForIDUser.js";
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