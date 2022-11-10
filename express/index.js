const express = require("express");
const app = express();

function formaSemRotas(){
  app.use(
    express.urlencoded({
      extended: true
    })
  );
  app.get("/", (req, res)=>{
    res.send(`<form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>`);
   });
  
  app.post("/", (req, res) =>{
    res.send(`O que foi enviado: ${req.body.nome}`);
  });

  app.get("/single/:idUsuarios?", (req, res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.nome);
   });
  
  app.listen(3000, () =>{
    console.log("Lívia")
   });
}

function Rotas(){
  app.use(express.urlencoded({
      extended: true
  }));
  const routes = require("./routes");
  app.use(routes);
  app.listen(3000, () =>{
    console.log("Servidor executando na porta 3000");
   });
}

//main
{
  Rotas();
}