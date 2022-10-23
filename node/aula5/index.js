const express = require("express");
const router = require("./router");
const porta = process.env.PORT || 8080;

const app = express();

app.use("/", router);
app.use("*", function(request, response){
  response.send("");
})

app.listen(porta, function(){console.log("Servidor rodando")})
