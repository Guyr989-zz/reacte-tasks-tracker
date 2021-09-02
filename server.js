const http = require("http");
const app = require("./backend/app.js");
const server = http.createServer(app);
const port = process.env.PORT || 8000;
console.log("server running on port " + port);
server.listen(port);
