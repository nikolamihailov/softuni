const mongoose = require("mongoose");

// creating schema - like a pattern for the collection
// the schema descibes how the cat collection should look like
const catSchema = new mongoose.Schema({
    // making field required and creating allowed length
    // adding custom validation message
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Minimum length is 3"],
        maxLength: 15
    },
    color: {
        type: String,
        required: true,
        enum: {
            values: ["white", "black"],
            message: "wrong color"
        }
    },
    age: Number,
    breed: String
});

// adding methods to the model
// this refers to the instance of the model
catSchema.methods.greet = function () {
    console.log(`${this.name} says hello`);
};
// the same as the above
/* catSchema.method("greet", function () {
    console.log(`${this.name} says hello`);
}); */

// creating virtual property
// property that will not be added to the db but will be in the instance
catSchema.virtual("info").get(function () {
    return `My name is ${this.name} and I am ${this.age} years old`;
});

// static model method
catSchema.static("getAll", function () {
    return this.find();
});

// the model defines the data inside of a collection in the db
// it is used to read/write from db using the rules of the schema
const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;