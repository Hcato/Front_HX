import { getProductsHandler } from "../Handlers/Product_Handlers/GetAllProducts.js";

let pollingInterval = null;
let timeout = null;

export function LongPollingProducts() {
    document.getElementById("productResult").textContent = "Esperando respuesta...";

    function resetTimeout() {
        if (timeout) {
            clearTimeout(timeout); 
        }
        timeout = setTimeout(() => {
            document.getElementById("productResult").textContent = "Tiempo de espera agotado.";
            clearInterval(pollingInterval); 
        }, 30000);
    }

    pollingInterval = setInterval(() => {
        getProductsHandler(); 
        resetTimeout();
    }, 5000);  

    timeout = setTimeout(() => {
        clearInterval(pollingInterval);
        document.getElementById("productResult").textContent = "Tiempo de espera agotado.";
    }, 30000); 
}
