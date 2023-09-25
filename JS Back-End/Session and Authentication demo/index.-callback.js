const express = require("express");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();
const secret = "alabala";
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
const PORT = 5050;

const users = {};

app.get("/", (req, res) => {
    res.send("hello");
});


app.get("/register", (req, res) => {
    res.send(`
    <form action="" method="POST">
        <label for="username">Username</label>
        <input type="text" name="username" id="username" />
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
        <input type="submit" value="Register" />
    </form>
    `);
});
app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    // generate salt
    const salt = await bcrypt.genSalt(10);
    // generate hash from password and salt
    const hash = await bcrypt.hash(password, salt);

    users[username] = {
        password: hash
    };
    // console.log(username, password, hash);
    res.redirect("/login");
});

app.get("/login", (req, res) => {
    res.send(`
    <form action="" method="POST">
        <label for="username">Username</label>
        <input type="text" name="username" id="username" />
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
        <input type="submit" value="Login" />
    </form>
    `);
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const hash = users[username]?.password;
    const isValid = await bcrypt.compare(password, hash);

    if (isValid) {
        const payload = { username };
        jwt.sign(payload, sectret, { expiresIn: "2d" }, (err, token) => {
            if (err) return res.redirect("/404");

            res.cookie("token", token);
            res.redirect("/profile");
        });
    }
    else res.send("Unauthorized");
});

app.get("/profile", (req, res) => {

    // get token from cookie
    const token = req.cookies["token"];
    console.log(token);
    // verify token
    if (token) {
        jwt.verify(token, secret, (err, payload) => {
            if (err) return res.status(401).send("Unathorized");
            res.send(`profile: ${payload.username}`);
        });
    };

    res.redirect("/login");
});


app.listen(PORT, () => console.log(`Server is listening on port ${PORT} ...`));