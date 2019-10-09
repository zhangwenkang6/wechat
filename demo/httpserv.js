#!/usr/local/node/bin/node

const http = require("http");

//定义路由表
var routeTable = {
    '/' : (req, res) => {
        res.end('Hey, This is home page');
    },

    '/help' : (req, res) => {
        res.end('there is no help');
    }
};

http.createServer((req, res) => {
    //路径信息
    console.log(req.url);

    //分割字符串解析路径部分
    let path_split = req.url.split('?');
    let path = path_split[0];

    //没有则返回404错误
    if (routeTable[path] === undefined) {
        res.statusCode = 404;
        res.end('page not found');
        return ;
    }
    routeTable[path](req, res);
})
.listen(8080);
