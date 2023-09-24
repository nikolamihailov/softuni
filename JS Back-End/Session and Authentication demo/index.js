const express = require("express");
const cookieParser = require("cookie-parser");
const { v4: uuid } = require("uuid");

const app = express();
const PORT = 5050;
// using the cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
    let id;

    // get the cookie userId from all the cookies
    const userId = req.cookies["userId"];

    if (userId) {
        id = userId;
    } else {
        id = uuid();
        // set the cookie
        res.cookie("userId", id, { httpOnly: true });
    }

    res.send(`Hello user - ${id}`);
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT} ...`));