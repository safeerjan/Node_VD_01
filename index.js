const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = 'localhost';
const port = '3000';

const server = http.createServer((req, res) => {
  
  var fileUrl = req.url;
  var filePath = path.resolve('./public' + fileUrl);
  fs.exists(filePath, () => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream(filePath).pipe(res);
  });
})

server.listen(port, hostname);
