//aula 1 - criando  servidor
//Para incluir o módulo HTTP, use o require()método:
const http = require("http");
//Use o createServer()método para criar um servidor HTTP:
http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type" : "text/html"}); //200 significa que tudo está OK, o segundo argumento é um objeto contendo os cabeçalhos de resposta.
  response.write("LIVIA"); //resposta ao client
  response.end(); //fim da resposta
}).listen(8080); //porta
