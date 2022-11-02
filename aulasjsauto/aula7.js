function condicoes(){
  const sum = 3 + 3, nome = "livia";
  //duas igualdades não faz secagem de tipo
  if(sum == "6"){
    console.log(`sum é igual a 6`);
  }
  else{
    console.log(`sum não é igual a 6`);
  }
  //três igualdades é o ideal a se fazer
  if(sum === "6"){
    console.log(`sum é igual a 6`);
  }
  else{
    console.log(`sum não é igual a 6`);
  }
  //&& e ||
  if(sum === 6 && nome === "livia"){
    console.log(`6 e livia`);
  }
  else{
    console.log(`falso`);
  }
  //operador ternário
  const ternario = sum === 2 ? true : false;
  console.log(ternario);
  //switch case
  switch(nome){
    case "livia":
      console.log(`meu nome é ${nome}`);
      break;
    case "lora":
      console.log(`meu nome é ${nome}`);
      break;
  }
}

//main
{
  condicoes();
};