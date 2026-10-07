const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home Page</h1>');
    } 
    else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Page</h1>');
    }
    else if (req.url === '/api/users' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify([{ id: 1, name: 'Abebe' }]));
    }
    else if (req.url === '/api/users' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'User created', data }));
            } catch (error) {
                res.writeHead(400);
                res.end('Invalid JSON');
            }
        });
    }
    else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(3000);


// Express - Clean and simple
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

// All four routes use /books but do different things

app.get('/books', (req, res) => {
    res.send('Getting all books');
});

app.post('/books', (req, res) => {
    res.send('Creating a new book');
});

app.put('/books', (req, res) => {
    res.send('Updating a book');
});

app.delete('/books', (req, res) => {
    res.send('Deleting a book');
});