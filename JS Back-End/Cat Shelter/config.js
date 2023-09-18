const PORT = 5050;

const search = () => {
    return document.querySelector("header form input").value;
};

module.exports = {
    search,
    PORT
};
