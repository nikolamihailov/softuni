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

const createUser = async (userData) => {
    const { country, city, street, streetNumber, ...data } = userData;

    data.address = {
        country,
        city,
        street,
        streetNumber
    };
    const res = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await res.json();
    return result.user;


};
export const userService = {
    getAllUsers,
    getUserById,
    createUser
};