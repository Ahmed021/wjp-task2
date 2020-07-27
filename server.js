'use strict'
const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({
        'success': 'true',
        'message': 'a new resource has been created'
    }));
    //res.write(JSON.stringify({ now: new Date() }));
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});