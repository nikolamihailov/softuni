const baseUrl = "http://localhost:3005/api/users";

const getAllUsers = async () => {
    const res = await fetch(baseUrl);
    const data = await res.json();
    return data.users;
};

const getUserById = async (userId) => {
    const res = await fetch(`${baseUrl}/${userId}`);
    const data = await res.json();
    return data.user;
};
export const userService = {
    getAllUsers,
    getUserById
};