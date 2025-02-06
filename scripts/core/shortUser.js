import { getUsersHandler } from "../Handlers/User_Handler.js";

let pollingInterval = null;

export function ShortPollingUsers() {
    getUsersHandler(); 
    pollingInterval = setInterval(getUsersHandler, 5000); 
}