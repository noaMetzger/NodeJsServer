import books from "./books.js"
import users from "./users.js"


import { Router } from "express";

const router = Router();
let i = 6;
router.post('/login', (req, res) => {
    const { name, pass } = req.body;
    const user = users.find(x => x.name == name && x.pass == pass);
    if (user)
        res.status(200).json(user);
    else
        res.status(400).send("error not exist");
});

router.post('/register', (req, res) => {
    const { name, pass } = req.body;
    const user = users.find(x => x.name == name && x.pass == pass);
    if (user)
        res.status(400).send("error exist already");
    else
    {
        users.push({ id: i, name, pass });
        i++;
        res.status(200).json(users);
    }
});












