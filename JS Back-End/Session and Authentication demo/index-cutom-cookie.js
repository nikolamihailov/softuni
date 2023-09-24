const express = require("express");
const { v4: uuid } = require("uuid");

const app = express();
const PORT = 5050;

app.get("/", (req, res) => {
    let id = uuid();

    // read the cookie from the header
    const cookie = req.header("Cookie");

    if (cookie) {
        // if the response has a cookie we keep the session and the
        // id remains the same
        const [key, value] = cookie.split("=");
        id = value;
    } else {
        // if the user doesnt have a cookie set we set it in the header
        res.header("Set-Cookie", `userId=${id}`);
    }

    res.send(`Hello user - ${id}`);
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT} ...`));