const Accessory = require("../models/Accessory");

exports.create = async (cubedata) => await Accessory.create({ ...cubedata });