const allCats = require("./data/cats-db.json");
const allBreeds = require("./data/breeds-db.json");
const PORT = require("./config.js");
const fs = require("fs");
const express = require("express");
const handlebars = require("express-handlebars");
const formidable = require("formidable");
const path = require("path");

const app = express();

app.engine("hbs", handlebars.engine({
    extname: "hbs"
}));
app.set("view engine", "hbs");


const bodyParser = express.urlencoded({ extended: false });
app.use(bodyParser);

app.use(express.static("content"));

app.get("/", (req, res) => {
    res.render("home", { allCats: allCats });
});

app.post("/", (req, res) => {
    const searhedText = req.body.search.toLowerCase();
    console.log(searhedText);
    const filteredCats = allCats.filter(cat =>
        cat.name.toLocaleLowerCase().includes(searhedText) ||
        cat.breed.toLocaleLowerCase().includes(searhedText));
    res.render("home", { allCats: filteredCats });

});

/* app.get("/cats", (req, res) => {
    res.render("home");
}); */

app.get("/cats/add-breed", (req, res) => {
    res.render("addBreed");
});

app.post("/cats/add-breed", (req, res) => {
    const breed = req.body.breed;
    allBreeds.push({ breedName: breed });
    //console.log(allBreeds);
    res.redirect("/");
});

app.get("/cats/add-cat", (req, res) => {
    // console.log(allBreeds);
    res.render("addCat", { allBreeds: allBreeds });
});

app.post("/cats/add-cat", (req, res) => {
    const form = new formidable.IncomingForm({ allowEmptyFiles: true });
    form.parse(req, (err, fields, files) => {
        if (err) return console.log(err);
        const { name, description, breed } = fields;
        const id = (name.slice(0, 2) + name.slice(-2) + name.length).repeat(3);
        const image = files.upload[0];
        const imageName = image.originalFilename;
        const oldPath = files.upload[0].filepath;
        const newPath = path.normalize(path.join(__dirname, './content/images/' + imageName));

        fs.copyFile(oldPath, newPath, (err) => {
            if (err) return res.status(500).send('An error occurred while saving the file.');
            allCats.push({ id, name, description, image: imageName, breed });
            // console.log(allCats);
            res.redirect('/');
        });
    });
});

app.get("/edit/:catId", (req, res) => {
    const id = req.params.catId;
    const cat = allCats.find(cat => cat.id === id);
    console.log(cat);
    const filteredBreeds = allBreeds.filter(breed => breed.breedName !== cat.breed);
    console.log(filteredBreeds);
    res.render("editCat", { cat, allBreeds: filteredBreeds });
});

app.post("/edit/:catId", (req, res) => {
    const catId = req.params.catId;
    const cat = allCats.find(cat => cat.id === catId);
    const catIndex = allCats.findIndex(cat => cat.id === catId);
    allCats.splice(catIndex, 1);
    const form = new formidable.IncomingForm({ allowEmptyFiles: true });
    form.parse(req, (err, fields, files) => {
        if (err) return console.log(err);
        const { name, description, breed } = fields;
        const id = (name.slice(0, 2) + name.slice(-2) + name.length).repeat(3);
        const image = files.upload[0];
        const imageName = image.originalFilename;
        const oldPath = files.upload[0].filepath;
        const newPath = path.normalize(path.join(__dirname, './content/images/' + imageName));

        fs.copyFile(oldPath, newPath, (err) => {
            if (err) return res.status(500).send('An error occurred while saving the file.');
            allCats.push({ id, name, description, image: imageName, breed });
            // console.log(allCats);
            res.redirect('/');
        });
    });
});


app.get("/newhome/:catId", (req, res) => {
    const id = req.params.catId;
    const cat = allCats.find(cat => cat.id === id);
    res.render("newHome", cat);
});


app.post("/newhome/:catId", (req, res) => {
    const id = req.params.catId;
    const catIndex = allCats.findIndex(cat => cat.id === id);
    allCats.splice(catIndex, 1);
    res.redirect("/");
});





app.listen(PORT, () => console.log("server is listening on " + PORT));