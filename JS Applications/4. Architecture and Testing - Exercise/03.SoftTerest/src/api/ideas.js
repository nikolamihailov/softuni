import { api } from "./api.js";

const urlsEndpoints = {
    ideas: '/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    crud: '/data/ideas/',
};

export async function getAllIdeas() {
    return await api.get(urlsEndpoints.ideas);
}

export async function getIdeaById(id) {
    return await api.get(urlsEndpoints.crud + id);
}