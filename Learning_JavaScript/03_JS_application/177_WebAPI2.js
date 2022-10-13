// Postman으로 호출하기

"use strict";

const http = require('http');
const qs = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    switch (req.method){
        case 'POST':
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });

            req.on('end', () => {
                const obj = qs.parse(body);
                res.writeHead(200);
                res.end(JSON.stringify(obj));
            });

            req.on('error', (err) => {
                console.error(err.stack);
            });
            break;
            default:
                res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});