const http = require('http');

// Create server
const server = http.createServer((req, res) => {
  // Send response
  res.end('Hello from elevate Server!');
});

// Start listening
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});