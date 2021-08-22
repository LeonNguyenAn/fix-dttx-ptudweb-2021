/**
 * Demo : Basic route in express (route : Bộ định tuyến)
 */

'use strict'

const express = require('express');
const app = express();

//Cấu hình port, hostName
const hostName = 'localhost';
const port = 3000;

//? app.METHOD(path, handler)
//?     METHOD: GET, POST, PUT, DELETE (CRUD - REST-full API)

//! GET --> READ data
app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is GET method');
});

//! POST --> CREATE data
app.post('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is POST method');
});

//! PUT/PATCH --> UPDATE data
app.put('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is PUT method');
});

//! DELETE --> DELETE data
app.delete('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is DELETE method');
});

//Start server
app.listen(port, hostName, () => {
    console.log(`Express server is running at http://${hostName}:${port}`);
})