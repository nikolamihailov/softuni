import { api } from "./api.js";

const urlEndpoints = {
    allMemes: "/data/memes?sortBy=_createdOn%20desc",
    memeId: "/data/memes/",
    createMeme: "/data/memes"
};

export async function getAllMemes() {
    return await api.get(urlEndpoints.allMemes);
}


export async function getMemeById(id) {
    return await api.get(urlEndpoints.memeId + id);
}

export async function createMeme(data) {
    return await api.post(urlEndpoints.createMeme, data);
}

export async function editMeme(id, data) {
    return await api.put(urlEndpoints.memeId + id, data);
}

export async function deleteMeme(id) {
    return await api.del(urlEndpoints.memeId + id);
}