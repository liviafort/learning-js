const express = require("express");
const router = express.Router();

let cityinfo = [
  {"city":"CampinaGrande", "state":"Paraiba"},
  {"city":"Fortaleza", "state":"Ceara"},
  {"city":"RiodeJaneiro", "state":"Rio de Janeiro"},
  {"city":"Manaus", "state":"Amazonia"}
];

router.get("/", function(request, response){
  response.json({ola: "Seja bem-vindo"});
});
router.get("/cityid", function(request, response){
  const city = request.params.cityid;
  const cityI = cityinfo.find(i=>i.city == city)
  if(!cityI){
    response.status(404).json({
    erro: "Curso não encontrado", cityResearched: city});
  }else{
    response.status(200).json(cityI);
  }
});
module.exports = router;