import { api } from "./api.js";

const urlEndpoints = {
    like: "/data/likes",
    getTotalLikes: (factId) => `/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`,
    hasLiked: (factId, userId) => `/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

export async function like(factId) {
    return await api.post(urlEndpoints.like, { factId });
}

export async function getLikes(factId) {
    return await api.get(urlEndpoints.getTotalLikes(factId));
}

export async function getUserLikes(factId, userId) {
    return await api.get(urlEndpoints.hasLiked(factId, userId));
}