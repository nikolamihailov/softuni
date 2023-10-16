const Game = require("../models/Game");

exports.createGame = (gameData) => Game.create(gameData);

exports.getAllGames = () => Game.find().lean();

exports.getGameById = (gameId) => Game.findById(gameId).lean();