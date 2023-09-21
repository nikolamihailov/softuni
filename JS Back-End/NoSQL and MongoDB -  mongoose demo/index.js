const mongoose = require("mongoose");

// importing the model

const Cat = require("./models/Cat");

// connecting to the DBMS - the database we want to work with
const connectDb = async function () {
    await mongoose.connect("mongodb://127.0.0.1:27017/cats-db");
    // conection established
    console.log("Db connected successfuly");

    // find all cats trrough the cat model from the db
    // returns a promise
    const cats = await Cat.find();
    // console.log(cats);

    // instance method
    // cats.forEach(c => c.greet());

    // virtual property
    // cats.forEach(c => console.log(c.info));

    // find cats based on criteria
    const whiteCats = await Cat.find({ breed: "white" });
    // console.log(whiteCats);

    // using static model method
    const res = await Cat.getAll();
    console.log(res);


};
connectDb();