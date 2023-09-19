const uniqId = require("uniqid");
const cubes = [
    {
        id: 'm9ngfp189olmqru16z',
        name: "Classic cube",
        description: 'dran dran',
        imageUrl: "https://images.pexels.com/photos/19677/pexels-photo.jpg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-19677.jpg&fm=jpg",
        difficultyLevel: 2,
    },
    {
        id: 'm8ngfp189olmqru16z',
        name: "cube 2",
        description: 'dran dran dran',
        imageUrl: "https://images.pexels.com/photos/19677/pexels-photo.jpg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-19677.jpg&fm=jpg",
        difficultyLevel: 1,
    }
];

exports.getAllCubes = (search, from, to) => {
    let result = [...cubes];
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

exports.getCubeById = (id) => {
    const cube = cubes.find(cube => cube.id === id);
    return cube;
};

exports.create = (cubeData) => {
    const newCube = {
        id: uniqId(),
        ...cubeData
    };
    cubes.push(newCube);

    return newCube;
};