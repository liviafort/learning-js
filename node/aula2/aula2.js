//criando Rotas no Servidor Node
const http = require("http");
const porta = 3000;
const host = "127.0.0.1";

const servidor = http.createServer(function (request, response){
  response.writeHead(200, {"Content-Type":"text/html"})
  if(request.url == "/"){
    response.write("<h1>LIVIA</h1>");}
  else if(request.url == "/canal"){
    response.write("<h1>MARIA</h1>")}
  else{
    response.write("<h1>FORTUNATO</h1>")}
  response.end();
});

servidor.listen(porta, host, function(){console.log("servidor rodando")});