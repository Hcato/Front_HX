import { getUsersHandler } from "../Handlers/User_Handlers/GetAllUser.js";

let pollingInterval = null;

export function ShortPollingUsers() {
    getUsersHandler(); 
    pollingInterval = setInterval(getUsersHandler, 5000); 
}