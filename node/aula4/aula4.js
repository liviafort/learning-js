const http = require("http");
const porta = process.env.PORT;
var fs = require("fs");

const servidor = http.createServer(function (request, response){
  fs.readFile("index.html", function(erro, arquivo){
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write(arquivo);
    return response.end();
  });
});
servidor.listen(porta || 8080, function(){console.log("servidor rodando")});