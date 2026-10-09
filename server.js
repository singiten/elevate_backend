/*
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
*/
// params
/*
const express = require('express');
const app = express();

app.use(express.json());

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

app.get('/users/:userId/posts/:postId', (req, res) => {
    const { userId, postId } = req.params;
    res.send(`User ${userId}, Post ${postId}`);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
*/
// query
/*
const express = require('express');
const app = express();

app.use(express.json());

app.get('/search', (req, res) => {
    const item = req.query.item;
    const limit = req.query.limit || 10;
    res.send(`Searching for: ${item}, Limit: ${limit}`);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
*/
// req.body
/*
const express = require('express');
const app = express();

// CRITICAL: This middleware MUST come before routes
app.use(express.json());

app.post('/users', (req, res) => {
    console.log('Received body:', req.body);
    const { name, email } = req.body;
    res.status(201).json({
        message: 'User created',
        user: { id: 1, name, email }
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
*/
//middleware