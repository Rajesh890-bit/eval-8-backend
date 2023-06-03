// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");
const port = 8000;
server.use(cors());
server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log("JSON Server is running 8000");
});
