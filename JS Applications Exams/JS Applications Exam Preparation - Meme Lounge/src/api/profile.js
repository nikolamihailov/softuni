import { api } from "./api.js";

const urlEndpoints = {
    profile: (userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
};

export async function getProfileMemes(userId) {
    return await api.get(urlEndpoints.profile(userId));
}
