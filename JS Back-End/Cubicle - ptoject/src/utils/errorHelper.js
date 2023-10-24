const { MongooseError } = require("mongoose");

exports.extractErrorMessages = (error) => {
    if (error instanceof MongooseError) {
        return Object.values(error.errors).map(e => e.message);
    } else if (error instanceof Error) {
        return [error.message];
    }
}

