import { getProductsHandler } from "../Handlers/Product_Handler.js";

let pollingInterval = null;

export function ShortPollingProducts() {
    getProductsHandler();

    pollingInterval = setInterval(() => {
        getProductsHandler(); 
    }, 5000); 
}
