const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

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