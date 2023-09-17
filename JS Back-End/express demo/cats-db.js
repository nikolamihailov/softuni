const cats = [];

const addCat = function (name, age) {
    cats.push({ name, age });
};

const getAllCats = () => [...cats];

module.exports = {
    addCat,
    getAllCats
};