const jsonServer = require('json-server');
const server = jsonServer.create();
var express =require('express')
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

if(process.env.NODE_ENV === "production"){
    server.use(express.static('dist'))
}

server.use(middlewares);
server.use(router);


server.listen(port);