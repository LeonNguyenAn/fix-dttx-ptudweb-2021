const express = require('express');
const app = express();

//Cấu hình port, hostName
const hostName = 'localhost';
const port = 3000;

//Định nghĩa routes (Đường dẫn)
app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Hello Leon</h1>');
});

//Start server
app.listen(port, hostName, () => {
    console.log(`Express server is running at http://${hostName}:${port}`);
})
