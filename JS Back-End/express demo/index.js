const port = 5000;
const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");

// creates an instance of the Express application, which you can use
// to define routes and handle incoming requests
const app = express();

// Add handlebars to express
// register view engine with file extension name in the quotes
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

// Add third party middleware
// check if the request has some post data and adds them to req.body
const bodyParser = express.urlencoded({ extended: false });
app.use(bodyParser);
// loads all static resources from the folder
app.use(express.static("public"));

// Add middlewares
// middlewares should always be before the action
// the order matters

// global middleware
app.use((req, res, next) => {
    console.log(`Middleware1`);
    next();
});

app.use((req, res, next) => {
    console.log(`Middleware2`);
    console.log(`HTTP Request ${req.method}: ${req.path}`);
    // invokes the next middleware
    next();
});

// custom middleware -  partial route middleware
// all paths that begin with /cats
app.use("/cats", (req, res, next) => {
    console.log(`Middleware2`);
    console.log(`HTTP Request ${req.method}: ${req.path}`);
    // invokes the next middleware
    next();
});

// custom middleware - route specific middleware
app.use("/specific", (req, res, next) => {
    console.log(`Specific middleware only for this route`);
    // invokes the next middleware
    next();
}, (req, res) => {
    res.send("some specific route with middleware");
});
// Express Router/ Actions

// app/server.METHOD(PATH, HANDLER)
// get requests
app.get("/", (req, res) => {
    res.send("Hello from express.js");
});

app.get("/cats", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/css/styles.css">
            <title>Document</title>
        </head>
        <body>
                <form method="post">
            <label for="name">Name</label>
            <input type="text" id="name" name="name">
            <label for="age">Age</label>
            <input type="number" id="age" name="age">
            <input type="submit" value="add cat">
            </form>
        </body>
        </html>
    `);
});

// post, put, delete requests
app.post("/cats", (req, res) => {
    console.log(req.body);
    res.status(201).send("Cat has been created!");
});
app.put("/cats", (req, res) => { });
app.delete("/cats", (req, res) => { });

// using parameter, used like this /:parameter
app.get("/cats/:catId", (req, res) => {
    // parameters object 
    // console.log(req.params);
    // simple validation for numbers
    if (!Number(req.params.catId)) return res.status(404).send("Cannot find such cat!");
    res.send(`Request with parameter for specific cat - ${req.params.catId} :)`);
});

app.get("/download", (req, res) => {
    // downloads the file with the name written in the quotes
    // res.download(path.resolve(__dirname, "cat.jpg"));
    // .attachment is used with res.end() and does the same as .download
    // res.attachment();
    // res.end(); 
    // Express sets the Content-Disposition header to "inline" by default.
    // opens the file in the browser directly
    // if the file is an image the line above is used
    // res.setHeader("Content-Type", "image/jpeg");
    res.sendFile(path.resolve(__dirname, "sample.pdf"));

});

// redirect - puts location in the header with status 302
app.get("/old-cats", (req, res) => {
    res.redirect("/cats");
});
// matches all, used for 404 page, should always be put at the end
app.get("*", (req, res) => {
    res.status(404).send("<h1>Page not found!</h1>");
});

// end of Express Router/ Actions

// starts the Express.js server and makes it listen on port 5000
app.listen(port, () => console.log("Server listening on port " + port));
