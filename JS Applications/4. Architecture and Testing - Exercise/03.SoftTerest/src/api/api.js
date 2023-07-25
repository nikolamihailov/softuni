import { getUserData } from "../utils.js";

const BASE_URL = "http://localhost:3030";

async function request(method, URL, requestBody) {
    const options = {
        method,
        headers: {},
    };

    if (requestBody) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(requestBody);
    }

    const user = JSON.parse(getUserData());

    if (user) {
        options.headers["X-Authorization"] = user.accessToken;
    }

    try {
        const response = await fetch(`${BASE_URL}${URL}`, options);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return response.json();
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

export const api = {
    get: request.bind(null, "GET"),
    post: request.bind(null, "POST"),
    put: request.bind(null, "PUT"),
    del: request.bind(null, "DELETE"),
};
