import { api } from "./api.js";

const urlEndpoints = {
    apply: "/data/applications",
    getTotalApplications: (offerId) => `/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`,
    hasApplied: (offerId, userId) => `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

export async function apply(offerId) {
    return await api.post(urlEndpoints.apply, { offerId });
}

export async function getAplications(offerId) {
    return await api.get(urlEndpoints.getTotalApplications(offerId));
}

export async function getUserAplications(offerId, userId) {
    return await api.get(urlEndpoints.hasApplied(offerId, userId));
}