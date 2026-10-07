
// 1. Import Express
const express = require('express');

// 2. Create an Express application
const app = express();

// 3. Define a route so the server does something
app.get('/', (req, res) => {
    res.send('Server is alive!');
});

// 4. Start the server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
