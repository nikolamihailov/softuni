const uniqId = require("uniqid");
const cubes = [];

exports.getAllCubes = () => [...cubes];

exports.create = (cubeData) => {
    const newCube = {
        id: uniqId(),
        ...cubeData
    };
    cubes.push(newCube);

    return newCube;
};