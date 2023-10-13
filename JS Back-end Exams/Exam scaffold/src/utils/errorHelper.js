const { MongooseError } = require("mongoose");

exports.extractErrors = (error) => {
    const isMongooseError = error instanceof MongooseError;
    console.log("is mongoose error" + isMongooseError);
    if (isMongooseError) {
        return Object.values(error.errors).map(e => e.message);
    } else {
        return [error.message];
    }
};