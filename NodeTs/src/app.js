"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("node:http");
var hostname = '127.0.0.1';
var port = 9988;
var server = http.createServer(function (req, rep) {
    rep.writeHead(200, { 'Content-Type': 'text/plain' });
    rep.end('Hello World');
}).listen(9988);
console.log('Server running at MIAW');
var halo4 = {
    name: 'miaw',
    online: false,
    fn: function (a) { return console.log(a); },
};
var halo2 = {
    name: 'miaw',
    title_id: 16,
    online: false,
    fn: function (a) { return console.log(a); },
};
halo2.fn(16);
halo4.fn(162);
