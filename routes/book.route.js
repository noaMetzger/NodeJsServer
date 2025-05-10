import books from "../books.js"
import { Router } from "express";

const router = Router();

router.get('/', (req, res, next) => {
    try {
        res.json(books);
    }
    catch (error) {
        next({ message: error.message });
    }
});

router.get('/:id', (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const book = books.find(x => x.id == id)
        if (book)
            res.json(book);
        else
            res.status(400).send("error not found");
    }
    catch (error) {
        next({ message: error.message });
    }
});

router.post('/', (req, res, next) => {
    try {
        const { name } = req.body;
        const price = parseFloat(req.params.price);
        books.push({ id: i, name, price })
        i++;
        res.json(books);
    }
    catch (error) {
        next({ message: error.message });
    }

});

router.put('/:id', (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const price = parseFloat(req.params.price);
        const { name } = req.body;
        let book = books.find(x => x.id == id);
        if (book) {
            book.name = name;
            book.price = price;
            res.status(200).json(book);
        }
        else
            res.status(400).send("error not found");
    }
    catch (error) {
        next({ message: error.message });
    }

})

router.delete('/:id', (req, res, next) => {
    try {
        const  id  =parseInt(req.params.id) ;
        let book = books.find(x => x.id == id);
        if (book) {
            books = books.filter(x => x.id != id);
            res.status(204).json(books);
        }
        else
            res.status(400).send("error not found");
    }
    catch (error) {
        next({ message: error.message });
    }

})
export default router;