const express = require("express");
const app = express();
const porta = process.env.PORT;

app.get("/", function(request, response){
  response.send("LIVIA");
});
app.get("/meio", function(request, response){
  response.send("MARIA");
});
app.get("/sobrenome", function(request, response){
  response.json({sobrenome:"FORTUNATO"});
});

app.listen(porta || 8080, function(){console.log("servidor rodando")});