// server.js
var http = require('http');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer((req, res) => {
    console.log(req.headers); // Log the request headers in terminal
    res.statusCode = 200; // Success code
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello World!</h1></body></html>'); // Serve HTML string
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
