import { api } from "./api.js";

const urlEndpoints = {
    allShoes: "/data/shoes?sortBy=_createdOn%20desc",
    shoeId: "/data/shoes/"
};

export async function getAllShoes() {
    return await api.get(urlEndpoints.allShoes);
}

export async function geShoeById(id) {
    return await api.get(urlEndpoints.shoeId + id);
}

export async function createShoe(data) {
    return await api.post(urlEndpoints.shoeId, data);
}

export async function editShoe(id, data) {
    return await api.put(urlEndpoints.shoeId + id, data);
}

export async function deleteShoe(id) {
    return await api.del(urlEndpoints.shoeId + id);
}