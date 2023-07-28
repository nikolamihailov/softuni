import { api } from "./api.js";

const urlSearch = {
    search: (query) => `/data/shoes?where=brand%20LIKE%20%22${query}%22`
};
export async function getAllShoes(data) {
     return await api.get(urlSearch.search(data));
}