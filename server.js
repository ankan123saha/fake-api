const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);


if(process.env.NODE_ENV === "production"){
    app.use(express.static('dist'))
}

server.listen(port);