import { api } from "./api.js";

const urlEndpoints = {
    recentGames: "/data/games?sortBy=_createdOn%20desc&distinct=category",
    gamesCatalog: "/data/games?sortBy=_createdOn%20desc",
    gameId: "/data/games/"
};

export async function getAllGamesHomePage() {
    return await api.get(urlEndpoints.recentGames);
}

export async function getAllGamesCatalogPage() {
    return await api.get(urlEndpoints.gamesCatalog);
}

export async function getGameById(id) {
    return await api.get(urlEndpoints.gameId + id);
}

export async function createGame(data) {
    return await api.post(urlEndpoints.gameId, data);
}

export async function editGame(id, data) {
    return await api.put(urlEndpoints.gameId + id, data);
}

export async function deleteGame(id) {
    return await api.del(urlEndpoints.gameId + id);
}