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
/*
const express = require('express');
const app = express();

app.use(express.json());

// Custom Middleware
const checkAuth = (req, res, next) => {
    console.log('Middleware running...');
    if (req.query.admin === 'true') {
        next(); // Continue
    } else {
        res.status(403).json({ error: 'Access Denied' });
    }
};

// Public route
app.get('/', (req, res) => {
    res.send('Public page');
});

// Protected route with middleware
app.get('/dashboard', checkAuth, (req, res) => {
    res.send('Welcome to the secret dashboard!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
*/

// all together
const express = require('express');
const app = express();

app.use(express.json());

// In-memory database
let students = [
    { id: 1, name: 'Abebe', age: 20, course: 'Web Dev' },
    { id: 2, name: 'Beyene', age: 22, course: 'Data Science' }
];
let nextId = 3;

// Logger Middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// GET all students
app.get('/api/students', (req, res) => {
    res.status(200).json(students);
});

// GET one student
app.get('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    
    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(student);
});

// CREATE student
app.post('/api/students', (req, res) => {
    const { name, age, course } = req.body;
    
    if (!name || !age || !course) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const newStudent = {
        id: nextId++,
        name,
        age: parseInt(age),
        course
    };
    
    students.push(newStudent);
    res.status(201).json(newStudent);
});

// UPDATE student
app.put('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    
    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }
    
    const { name, age, course } = req.body;
    if (name) student.name = name;
    if (age) student.age = parseInt(age);
    if (course) student.course = course;
    
    res.status(200).json(student);
});

// DELETE student
app.delete('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);
    
    if (index === -1) {
        return res.status(404).json({ error: 'Student not found' });
    }
    
    students.splice(index, 1);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('Student API running on port 3000');
});