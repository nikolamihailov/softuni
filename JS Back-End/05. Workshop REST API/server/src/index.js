const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello there");
});

app.use(routes);

app.listen(3030, () => console.log("Server is listening on port 3030..."));