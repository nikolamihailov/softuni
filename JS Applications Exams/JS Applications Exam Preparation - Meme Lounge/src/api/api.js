import { getUserData, clearUserData, showHideNotification } from "../utils.js";

const BASE_URL = "http://localhost:3030";

async function request(method, URL, requestBody) {

    const options = {
        method,
        headers: {}
    };

    if (requestBody) {
        options.headers["Content-type"] = "application/json";
        options.body = JSON.stringify(requestBody);
    }

    const user = getUserData();
    if (user) {
        const token = user.accessToken;
        options.headers["X-Authorization"] = token;
    }
    try {
        const res = await fetch(`${BASE_URL}${URL}`, options);

        let result;
        if (res.status !== 204) {
            result = await res.json();
        }

        if (!res.ok) {
            if (res.status === 403) {
                clearUserData();
            }
            const err = result;
            throw err;
        }
        return result;

    } catch (error) {
        // console.log(error);
        showHideNotification(error.message);
        throw error;
    }

}

const get = request.bind(null, "GET");
const post = request.bind(null, "POST");
const put = request.bind(null, "PUT");
const del = request.bind(null, "DELETE");

export const api = { get, post, put, del };