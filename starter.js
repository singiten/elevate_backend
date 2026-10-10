
// LIBRARY MANAGEMENT SYSTEM API


const express = require('express');
const app = express();


// MIDDLEWARE


app.use(express.json());

// Logger Middleware (already provided)
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();
});


// IN-MEMORY DATABASE (Already provided)


let books = [
    {
        id: 1,
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        year: 1999,
        genre: "Technology",
        available: true
    },
    {
        id: 2,
        title: "Clean Code",
        author: "Robert Martin",
        year: 2008,
        genre: "Technology",
        available: true
    },
    {
        id: 3,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        genre: "Fantasy",
        available: false
    }
];

let nextId = 4; // For creating new books


// TODO: AUTHENTICATION MIDDLEWARE


// Create a middleware called isLibrarian
// It should check if req.query.role === 'librarian'
// - If yes: call next()
// - If no: 
//   - If no role provided: return 401 with message "Authentication required"
//   - If role is not librarian: return 403 with message "Access denied. Librarian only"

// YOUR CODE HERE


// TODO: ROUTES

// ROUTE 1: GET /api/books

// Purpose: Get all books
// Access: Public (anyone can read)
// 
// Features to implement:
// - Return all books with status 200
// - Support optional query parameter ?genre= to filter by genre
// - Support optional query parameter ?available=true to filter available books
// - If no books match filter, return empty array with 200

// YOUR CODE HERE


// --------------------------------------------
// ROUTE 2: GET /api/books/:id
// --------------------------------------------
// Purpose: Get a single book by ID
// Access: Public (anyone can read)
//
// Requirements:
// - Use req.params.id to find book
// - Return book with status 200 if found
// - Return 404 with error message "Book not found" if not found
// - Handle invalid ID (non-numeric) with 400

// YOUR CODE HERE


// ROUTE 3: POST /api/books

// Purpose: Create a new book
// Access: Librarian only (use isLibrarian middleware)
//
// Requirements:
// - Validate req.body has: title, author, year, genre
// - If missing fields: return 400 with error "Missing required fields"
// - If year is not a number or invalid: return 400 with error "Invalid year"
// - Create new book with unique ID
// - Set available: true by default
// - Return created book with status 201
// - Include the Location header with the new book's URL

// YOUR CODE HERE

// ROUTE 4: PUT /api/books/:id

// Purpose: Update an existing book
// Access: Librarian only (use isLibrarian middleware)
//
// Requirements:
// - Find book by req.params.id
// - Return 404 if book doesn't exist
// - Update only the fields provided in req.body
// - Validate: if year is provided, must be a valid number
// - Return updated book with status 200

// YOUR CODE HERE

// ROUTE 5: DELETE /api/books/:id

// Purpose: Delete a book
// Access: Librarian only (use isLibrarian middleware)
//
// Requirements:
// - Find and delete book by req.params.id
// - Return 404 if book doesn't exist
// - Return 204 (No Content) on successful delete
// - No response body needed

// YOUR CODE HERE



// 404 HANDLER (Already provided)


app.use((req, res) => {
    res.status(404).json({ 
        error: 'Route not found',
        message: `Cannot ${req.method} ${req.url}`
    });
});


// START SERVER


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Library API running on http://localhost:${PORT}`);
});