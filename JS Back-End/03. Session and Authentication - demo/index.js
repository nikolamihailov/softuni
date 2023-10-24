const express = require("express");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("./lib/jwt-custom");

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
        try {
            const payload = { username };
            const token = await jwt.sign(payload, secret, { expiresIn: "2d" });
            res.cookie("token", token);
            res.redirect("/profile");

        } catch (error) {
            console.log(error);
            res.redirect("/404");
        }
    }
    else return res.send("Unauthorized");
});

app.get("/profile", async (req, res) => {

    // get token from cookie
    const token = req.cookies["token"];
    // verify token
    if (token) {
        try {
            const payload = await jwt.verify(token, secret);
            res.send(`profile: ${payload.username}`);
        } catch (error) {
            res.status(401).send("Unathorized");
        };
    } else {
        res.redirect("/login");
    }

});


app.listen(PORT, () => console.log(`Server is listening on port ${PORT} ...`));