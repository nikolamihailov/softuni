const Animal = require("../models/Animal");

exports.addAnimal = (animalData) => Animal.create(animalData);

exports.getLatestThreeAnimals = () => Animal.find().sort({ _id: -1 }).limit(3).lean();

exports.getAllAnimals = (location) => {
    if (location) {
        return Animal.find({ location: new RegExp(location, 'i') }).lean();
    }
    return Animal.find().lean();
};

exports.getAnimalById = (animalId) => Animal.findById(animalId).lean();

exports.updateAnimal = (animalId, animalData) => Animal.findByIdAndUpdate(animalId, animalData, { runValidators: true });

exports.deleteAnimal = (animalId) => Animal.findByIdAndDelete(animalId);

exports.donateToAnimal = (animalId, userId) => Animal.findByIdAndUpdate(animalId, { $push: { donations: userId } });