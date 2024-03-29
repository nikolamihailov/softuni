const Accessory = require("../models/Accessory");

exports.create = async (cubedata) => await Accessory.create({ ...cubedata });

exports.getAllAccessories = () => Accessory.find().lean();

exports.getAvailableAccessories = (accessoryIds) => Accessory.find({ _id: { $nin: accessoryIds } }).lean(); 