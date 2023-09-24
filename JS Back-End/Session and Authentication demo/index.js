const express = require("express");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.urlencoded({ extended: false }));
const PORT = 5050;

const users = {};

app.get("/", (req, res) => {
    res.send(users);
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

    if (isValid) res.send("Successful login");
    else res.send("Unauthorized");
});


app.listen(PORT, () => console.log(`Server is listening on port ${PORT} ...`));