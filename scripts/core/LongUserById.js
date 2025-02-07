import { getUserIdHandler } from "../Handlers/User_Handlers/GetForIdUser.js";
let pollingInterval = null;

export function LongPollingUser() {
    const userId = document.getElementById("getuserId").value;

    if (!userId) {
        alert("Por favor, ingresa un ID de usuario.");
        return;
    }

    document.getElementById("userIdResult").textContent = "Esperando respuesta...";  // Mensaje de espera.

    pollingInterval = setInterval(() => {
        getUserIdHandler(userId); 
    }, 5000); 

    setTimeout(() => clearInterval(pollingInterval), 30000); 
}
