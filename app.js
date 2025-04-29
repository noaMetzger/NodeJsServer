import books from "./books.js"
import users from "./users.js"
import booksRouter from './routes/book.route.js';
import usersRouter from './routes/user.route.js';

// 1. ייבוא
import express from 'express';

// 2. יצירת שרת
const app = express();

// ============== middlewares ==============
// מאפשר לקבל באדי מסוג גייסון
app.use(express.json());
// מאפשר לקבל באדי מתוך טופס
app.use(express.urlencoded({ extended: true }));

// 3. טיפול בניתובים


app.use('/books', booksRouter);
app.use('/users', usersRouter);


// let i = 6;
// app.get('/', (req, res) => {
//     res.send("hello world");
// });

// app.get('/books', (req, res) => {
//     res.json(books);
// });

// app.get('/books/:id', (req, res) => {
//     const { id } = req.params;
//     const book = books.find(x = x.id == id)
//     if (book)
//         res.json(book);
//     else
//         res.status(400).send("error not found");
// });

// app.post('/books', (req, res) => {
//     const { name, price } = req.body;
//     books.push({ id: i, name, price })
//     i++;
//     res.json(books);
// });

// app.put('/books/:id', (req, res) => {
//     const { id } = req.params;
//     const { name, price } = req.body;
//     let book = books.find(x => x.id == id);
//     if (book) {
//         book.name = name;
//         book.price = price;
//         res.status(200).json(book);
//     }
//     else
//         res.status(400).send("error not found");

// })

// app.delete('/books/:id', (req, res) => {
//     const { id } = req.params;
//     let book = books.find(x => x.id == id);
//     if (book)
//     {
//         books = books.filter(x => x.id != id);
//         res.status(204).json(books);
//     }
//     else
//         res.status(400).send("error not found");
// })


// 4. הרצת שרת
const port = 5000;
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
});











