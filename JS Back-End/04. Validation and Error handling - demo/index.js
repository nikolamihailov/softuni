const express = require("express");
const validator = require("validator");
const { isAgevalid } = require("./utils/validator");
const { body, validationResult } = require("express-validator");
const { validateName } = require("./middlewares/middlewares");
const app = express();
app.use(express.urlencoded({ extended: false }));

const PORT = 5050;

app.get("/", (req, res) => {
    res.send(`
    <form method="POST">
     <label for="name">Name</label>
     <input type="text" name="name" id="name" />
     <label for="age">Age</label>
     <input type="number" name="age" id="age" />
     <label for="age">Password</label>
     <input type="password" name="password" id="password" />
     <button type="submit">Send</button>
     </form>
    `);
});

app.post("/",
    validateName,
    body("password").isLength({ min: 4, max: 20 }).withMessage("Invalid password"),
    (req, res) => {
        const { age, password } = req.body;

        if (!isAgevalid(age)) return res.send("Invalid age");
        //if (!validator.isStrongPassword(password)) return res.send("Weak password");

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).send(errors.array()[0].msg);
        }
        res.send("Successful");
    });


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));