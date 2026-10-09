const express = require('express');
const app = express();

app.use(express.json());

// GET - Read
app.get('/books', (req, res) => {
    res.send('Getting all books');
});

// POST - Create
app.post('/books', (req, res) => {
    res.send('Creating a new book');
});

// PUT - Update
app.put('/books', (req, res) => {
    res.send('Updating a book');
});

// DELETE - Delete
app.delete('/books', (req, res) => {
    res.send('Deleting a book');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});