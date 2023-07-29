const item = "user";

export function getUserData() {
  return JSON.parse(sessionStorage.getItem(item));
}

export function setUserData(data) {
  sessionStorage.setItem(item, JSON.stringify(data));
}

export function clearUserData() {
  sessionStorage.clear();
}

export function createFormHandler(callback) {
  return function (e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    callback(data, form);
  };
}
