'use strict' //Check lỗi synxtac
console.clear();

const { json } = require('express');
const express = require('express');

const app = express();
const port = 3000;
const hostName = 'localhost';

//Bất chấp mọi xử lý, lệnh này xử lý đầu tiên
app.all('/', (req, res, next) => {
    console.log(req.method + " " + req.url);
    next();
});

//! GET --> READ data
app.get('/', (req, res) => {
    res.end('This is GET method');
});

//! POST --> CREATE data
app.post('/', (req, res) => {
    res.end('This is POST method');
});

//! PUT/PATCH --> UPDATE data
app.put('/', (req, res) => {
    res.end('This is PUT method');
});

//! DELETE --> DELETE data
app.delete('/', (req, res) => {
    res.end('This is DELETE method');
});

//ROUTE
const usersRouter = require('./user.router');
app.use('/users', usersRouter);

app.get('/user', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.end(JSON.stringify(data));
});

const f1 = (req, res, next) => {
    console.log('F1');
    next();
};

const f2 = (req, res, next) => {
    console.log('F2');
    next();
};

//Dùng con trỏ next, chạy hàm f1 -> f2 -> func
app.get('/func', [f1, f2], (req, res, next) => {
    console.log('func is processing');
    res.end('func is called');
    next();
}, (req, res) => {
    console.log('=> respone done');
});

app.listen(port, hostName, () => {
	console.log(`Server is starting at http://${hostName}:${port}`);
});
