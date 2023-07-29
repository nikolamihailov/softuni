import { api } from "./api.js";

const urlEndpoints = {
    allFunFacts: "/data/facts?sortBy=_createdOn%20desc",
    postFact: "/data/facts",
    funFactId: "/data/facts/"
};

export async function getAllFunFacts() {
    return await api.get(urlEndpoints.allFunFacts);
}

export async function getFactById(id) {
    return await api.get(urlEndpoints.funFactId + id);
}

export async function createFunFact(data) {
    return await api.post(urlEndpoints.postFact, data);
}

export async function editFact(id, data) {
    return await api.put(urlEndpoints.funFactId + id, data);
}

export async function deleteFact(id) {
    return await api.del(urlEndpoints.funFactId + id);
}
