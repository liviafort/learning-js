//usado para usar o aula1newmodule
const http = require("http");
const newmodule = require("./aula1newmodule");
http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type" : "text/plain"});
  response.end(newmodule.myDateTime());
}).listen(8080);
