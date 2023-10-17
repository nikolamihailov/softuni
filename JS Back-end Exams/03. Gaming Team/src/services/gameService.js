const Game = require("../models/Game");

exports.createGame = (gameData) => Game.create(gameData);

exports.getAllGames = (name, platform) => {
    const query = {};
    if (name) {
        query.name = new RegExp(name, 'i');
    }
    if (platform) {
        query.platform = platform;
    }
    return Game.find(query).lean();
};

exports.getGameById = (gameId) => Game.findById(gameId).lean();

exports.buyGame = (gameId, userId) => Game.findByIdAndUpdate(gameId, { $push: { boughtBy: userId } });

exports.updateGame = (gameId, gameData) => Game.findByIdAndUpdate(gameId, gameData, { runValidators: true });

exports.deleteGame = (gameId) => Game.findByIdAndDelete(gameId);