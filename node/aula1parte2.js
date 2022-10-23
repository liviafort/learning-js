//usado para usar o aula1newmodule
/*const http = require("http");
const newmodule = require("./aula1newmodule");
http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type" : "text/plain"});
  response.end(newmodule.myDateTime());
}).listen(8080);*/

//usado para dividir a string de consulta - modulo URL
const http = require("http");
const url = require("url");

http.createServer(function (request, response){
  response.writeHead(200, {"Content-Type" : "Text/HTML"});
  var q = url.parse(request.url, true).query;
  var txt = q.year + " " + q.month;
  response.end(txt);
}).listen(8080);
