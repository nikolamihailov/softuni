const express = require("express");
const cookieParser = require("cookie-parser");
const { v4: uuid } = require("uuid");

const app = express();
const PORT = 5050;
// using the cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
    let id = uuid();

    // get the cookie userId from all the cookies
    const userId = req.cookies["userId"];

    if (userId) {
        id = userId;
    } else {
        // set the cookie
        res.cookie("userId", id);
    }

    res.send(`Hello user - ${id}`);
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT} ...`));