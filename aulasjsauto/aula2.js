function names(index){
  let names = ["Livia", "Rosangela", "Pelele", "Zezinho", "Ze Filho", "Rhuana", "Loranna", "Maria"];
  names.push("Leão"); //final da lista
  names.unshift("Branca"); //inicio da lista
  names.pop; //tira do final da lista
  names.indexOf("Rosangela"); //mostra posição
  names.sort(); //ordena a lista
  Array.isArray(names); //confirma se é array ou nega
  return console.log(names[index]);
}
                             
//main
{
  names(3);
}