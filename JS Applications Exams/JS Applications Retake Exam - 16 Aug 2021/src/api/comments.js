import { api } from "./api.js";

const urlEndpoints = {
    loadComments: (gameId)=> `/data/comments?where=gameId%3D%22${gameId}%22`,
    postComment: "/data/comments"
};

export async function loadComments(gameId) {
    return await api.get(urlEndpoints.loadComments(gameId));
}

export async function postComment(data) {
    return await api.post(urlEndpoints.postComment, data);
}