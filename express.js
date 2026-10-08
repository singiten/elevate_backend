
const express = require('express');
const app = express();

app.use(express.json()); // Parse JSON automatically

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
});

app.get('/api/users', (req, res) => {
    res.json([{ id: 1, name: 'Abebe' }]);
});

app.post('/api/users', (req, res) => {
    const data = req.body; // Already parsed!
    res.status(201).json({ message: 'User created', data });
});

app.listen(3000);
