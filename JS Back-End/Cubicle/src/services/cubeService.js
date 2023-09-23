const Cube = require("../models/Cube");

// .lean() converts the mongoose documents to js objects
exports.getAllCubes = async (search, from, to) => {
    let result = await Cube.find().lean();

    if (search) {
        result = result.filter(cube => cube.name.toLocaleLowerCase().includes(search.toLowerCase()));
    }
    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= +from);
    }
    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= +to);
    }
    return result;
};

exports.getCubeById = (id) => Cube.findById(id).lean();

exports.create = async (cubeData) => {
    const newCube = await Cube.create({
        ...cubeData
    });

    return newCube;
};