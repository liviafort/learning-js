const http = require("http");
const porta = process.env.PORT;
var fs = require("fs");

const servidor = http.createServer(function (request, response){
  fs.appendFile("qualquer.txt", "OLA-OLA-OLA", function(erro){
    if(erro)throw erro;
    console.log("Arquivo txt criado com sucesso");
    response.end();
  });
});
servidor.listen(porta || 8080, function(){console.log("servidor rodando")});