import books from "../books.js"
import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controllers/books.controller.js";


const router = Router();

// get all
router.get('/', getAllBooks);

// get by id
router.get('/:id', getBookById);

// add
router.post('/', addBook);

// update
router.put('/:id', updateBook);

// delete
router.delete('/:id', deleteBook);

export default router;