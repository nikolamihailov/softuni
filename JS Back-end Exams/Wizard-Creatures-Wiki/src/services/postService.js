const Creature = require("../models/Creature");

exports.createPost = (postData) => Creature.create(postData);

exports.getAllPosts = () => Creature.find().lean();

exports.getPostById = (postId) => Creature.findById(postId).populate("votes").populate("owner").lean();

exports.updatePost = (postId, postData) => Creature.findByIdAndUpdate(postId, postData, { runValidators: true });

exports.deletePost = (postId) => Creature.findByIdAndDelete(postId);

exports.voteOnPost = (postId, voterId) => {
    return Creature.findByIdAndUpdate(postId, { $push: { votes: voterId } });
};

exports.getAllUserPosts = (userId) => Creature.find({ owner: userId }).lean();
