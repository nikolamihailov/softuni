const mongoose = require("mongoose");

// importing the models

const Cat = require("./models/Cat");
const Person = require("./models/Person");

// connecting to the DBMS - the database we want to work with
const connectDb = async function () {
    await mongoose.connect("mongodb://127.0.0.1:27017/cats-db");

    // if we write name of non-existing db and add a cat, new db will be created
    // await mongoose.connect("mongodb://127.0.0.1:27017/cats-db-second-version");
    /*   await Cat.create({
          name: "new db cat",
          age: 1444444,
          breed: "yupi"
      }); */
    // conection established
    console.log("Db connected successfuly");

    // instance method
    // cats.forEach(c => c.greet());

    // virtual property
    // cats.forEach(c => console.log(c.info));


    // using static model method
    // const res = await Cat.getAll();
    //  console.log(res);

    // READ

    // find all cats trrough the cat model from the db
    // returns a promise
    // const cats = await Cat.find();

    // find cats based on criteria
    // returns array
    // const whiteCats = await Cat.find({ breed: "white" });

    // find the first cat based on criteria
    // returns an object
    // const cat = await Cat.findOne({ breed: "white" });

    // find cat by id 
    // returns an object
    // const cat = await Cat.findById("650c4e9036e1c4969b7bcc16");

    /////////////////////////// 
    // CREATE

    // create new instance from the model Cat
    /*  const newCat = new Cat({
         name: "cat 4",
         age: 10,
         breed: "ulichna"
     });
     // not added until we add it with .save()
     await newCat.save();
     console.log(newCat); */

    // second way
    /* const newCat = await Cat.create({
        name: "bob",
        age: 14,
        breed: "nqma"
    }); */
    // console.log(newCat)

    //////////////////////// 
    // UPDATE

    // finds the object by criteria
    // const bob = await Cat.findOne({ name: "bob" });
    // updates the property
    // bob.age = 1;
    // saves it in the db
    // await bob.save();

    // second method with native mongodb
    // await Cat.updateOne({ name: "bob" }, { $set: { age: 20 } });

    // third way with mongoose way
    //await Cat.findByIdAndUpdate("650c9e4443596241be70df1f", { $set: { age: 100 } });

    //////////////////////// 
    // DELETE

    // first way 
    // await Cat.deleteOne({ name: "bob" });

    // second way
    // await Cat.findByIdAndDelete("650c4c3b36e1c4969b7bcc15");

    // adding new collection to the database that will be calles the plural of person - people
    // the collection uses the rules defined by the mdoel
    /* await Person.create({
        name: "koleto",
        age: 22
    }); */

    // native mongodb way
    // find all cats using selecting operators 
    // not equal operator - $ne
    // const cats = await Cat.find({ name: { $ne: "cat3" } });
    // console.log(cats);

    // second way - mongoose way
    /*  const cats = await Cat.find().where("name").ne("cat3");
     console.log(cats); */

    // testing validation
    const newCat = await Cat.create({
        name: "bo",
        age: 14,
        breed: "nqma"
    });


    const res = await Cat.getAll();
    console.log(res);

};
connectDb();