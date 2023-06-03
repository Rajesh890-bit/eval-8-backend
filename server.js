// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

// Enable CORS middleware
server.use(cors());

server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 8000, () => {
  console.log("JSON Server is running");
});
