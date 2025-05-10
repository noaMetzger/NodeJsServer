import users from "../users.js"

import { Router } from "express";

const router = Router();

let i = 6;
router.post('/login', (req, res, next) => {
    try {
        const { name, pass } = req.body;
        const user = users.find(x => x.name == name && x.pass == pass);
        if (user)
            res.status(200).json(user);
        else
            res.status(400).send("error not exist");
    }
    catch (error) {
        next({ message: error.message });
    }

});

router.post('/register', (req, res, next) => {
    try {
        const { name, pass } = req.body;
        const user = users.find(x => x.name == name && x.pass == pass);
        if (user)
            res.status(400).send("error exist already");
        else {
            users.push({ id: i, name, pass });
            i++;
            res.status(200).json(users);
        }
    }
    catch (error) {
        next({ message: error.message });
    }

});

export default router;










