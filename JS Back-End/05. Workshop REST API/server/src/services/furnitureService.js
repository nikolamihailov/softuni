const Furniture = require("../models/Furniture");

exports.getAll = () => Furniture.find();

exports.getAllMine = async (qs) => {
    const ownerId = qs.split("=")[1].replaceAll('"', "");
    return Furniture.find({ _ownerId: ownerId });
};

exports.getOne = (id) => Furniture.findById(id);

exports.create = (data) => Furniture.create(data);

exports.update = (id, data) => Furniture.findByIdAndUpdate(id, data);

exports.delete = (id) => Furniture.findByIdAndDelete(id);