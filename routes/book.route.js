import books from "./books.js"
import users from "./users.js"

import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.json(books);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const book = books.find(x = x.id == id)
    if (book)
        res.json(book);
    else
        res.status(400).send("error not found");
});

router.post('/', (req, res) => {
    const { name, price } = req.body;
    books.push({ id: i, name, price })
    i++;
    res.json(books);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    let book = books.find(x => x.id == id);
    if (book) {
        book.name = name;
        book.price = price;
        res.status(200).json(book);
    }
    else
        res.status(400).send("error not found");

})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    let book = books.find(x => x.id == id);
    if (book)
    {
        books = books.filter(x => x.id != id);
        res.status(204).json(books);
    }
    else
        res.status(400).send("error not found");
})