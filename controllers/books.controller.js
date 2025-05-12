import Book from '../models/book.model.js';
// import books from "../books.js"


export const getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find();
        res.json(books);
    }
    catch (error) {
        next({ message: error.message });
    }
};

// get by id
export const getBookById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const book = await Book.find(x => x.id == id)
        if (book)
            res.json(book);
        else
            res.status(400).send("error not found");
    }
    catch (error) {
        next({ message: error.message });
    }
};

// add
export const addBook = async (req, res, next) => {
    try {
        const { name, categories, author, price } = req.body;
        const book = new Book({ name, price, categories, author });
        await book.save();
        // i++;
        res.json(book);
    }
    catch (error) {
        next({ message: error.message });
    }
};

// update
export const updateBook = async (req, res, next) => {
    try {
        const id = req.params.id;
        const price = parseFloat(req.body.price);
        const { name, categories, author } = req.body;
        const book = await Book.findByIdAndUpdate(id, {
            $set: { name, price, categories, author },
        }, { new: true });

        res.status(200).json(book);
    }
    catch (error) {
        next({ message: error.message });
    }
};

// delete
export const deleteBook = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Book.findByIdAndDelete(id);
        res.status(204).end();
    }
    catch (error) {
        next({ message: error.message });
    }
};