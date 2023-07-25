import { api } from "./api.js";
import { saveUserData, removeUserData } from "../utils.js";

const urlsEndpoints = {
    login: "/users/login",
    register: "/users/register",
    logout: "/users/logout",
};

export async function registerUser(email, password) {
    const user = await api.post(urlsEndpoints.register, { email, password });
    saveUserData(user);
}

export async function login(email, password) {
    const user = await api.post(urlsEndpoints.login, { email, password });
    saveUserData(user);
}

export async function logout() {
    api.get(urlsEndpoints.logout);
    removeUserData();
}