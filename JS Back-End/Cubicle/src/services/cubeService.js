const Cube = require("../models/Cube");

// .lean() converts the mongoose documents to js objects
exports.getAllCubes = async (search, from, to) => {
    let result = await Cube.find().lean();

    if (search) {
        const regex = new RegExp(search, 'i');
        result = await Cube.find({ name: { $regex: regex } }).lean();
        console.log(result);
    }
    if (from) {
        result = await result.filter(cube => cube.difficultyLevel >= +from);
    }
    if (to) {
        result = await result.filter(cube => cube.difficultyLevel <= +to);
    }
    return result;
};

exports.getCubeById = (id) => Cube.findById(id).populate("accessories").lean();

exports.create = async (cubeData) => {
    const newCube = await Cube.create({
        ...cubeData
    });

    return newCube;
};

exports.attachAccessory = async (cubeId, accessoryId) => {
    await Cube.findByIdAndUpdate(cubeId, { $push: { accessories: accessoryId } });
};