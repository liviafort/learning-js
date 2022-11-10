const express = require("express");
const route = express.Router();

//Rotas da HOME
const homeController = require("./controllers/homeController");
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);

//Rotas de contato
const contatoController = require("./controllers/contatoController")
route.get("/contato", contatoController.paginaInicial);

module.exports = route;