export function getUserData() {
    return sessionStorage.getItem("user");
}
export function removeUserData() {
    sessionStorage.removeItem("user");
}
export function saveUserData(user) {
    sessionStorage.setItem("user", JSON.stringify(user));
}

