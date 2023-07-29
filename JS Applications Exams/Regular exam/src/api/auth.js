import { api } from "./api.js";
import { setUserData, clearUserData } from "../utils.js";

const urlEndpoints = {
    login: "/users/login",
    register: "/users/register",
    logout: "/users/logout"
};

export async function login(email, password) {
    const user = await api.post(urlEndpoints.login, { email, password });
    setUserData(user);
}

export async function register(email, password) {
    const user = await api.post(urlEndpoints.register, { email, password });
    setUserData(user);
}

export function logout() {
    api.get(urlEndpoints.logout);
    clearUserData();
}