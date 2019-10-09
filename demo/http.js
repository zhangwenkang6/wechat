#!/usr/local/node/bin/node

const http = require('http');

http.createServer((req,res)=>{
    res.end('hello nodejs');
}).listen(8080);
