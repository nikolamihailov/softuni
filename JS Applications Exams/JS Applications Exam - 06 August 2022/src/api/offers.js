import { api } from "../api/api.js";

const urlEndpoints = {
    allOffers: "/data/offers?sortBy=_createdOn%20desc",
    offerId: "/data/offers/"
};

export async function getAllOffers() {
    return await api.get(urlEndpoints.allOffers);
}

export async function getOfferById(id) {
    return await api.get(urlEndpoints.offerId + id);
}

export async function createOffer(data) {
    return await api.post(urlEndpoints.offerId, data);
}

export async function editOffer(id, data) {
    return await api.put(urlEndpoints.offerId + id, data);
}

export async function deleteOffer(id) {
    return await api.del(urlEndpoints.offerId + id);
}
