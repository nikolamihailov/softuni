const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const { auth } = require("./middlewares/authMiddleware");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(auth);


mongoose.connect("mongodb://127.0.0.1:27017/furniture-db")
    .then(() => console.log("Db connected"))
    .catch(err => console.log(err));

/* app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
}); */

app.get("/", (req, res) => {
    res.send("Hello there");
});

app.use(routes);

app.listen(3030, () => console.log("Server is listening on port 3030..."));