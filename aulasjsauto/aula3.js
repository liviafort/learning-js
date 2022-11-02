function number(){
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4];
  //map transforma os elementos
  const numbermulti2 = numbers.map((item)=>{
    return item*2;
  })
  //foreach é uma alternativa para o for
  const foreacc = numbers.forEach((item) => {
    console.log(item);
  });
  //filtrar dados
  const filtre = numbers.filter((item) => {
    return item % 2 === 0;
  });
  //reduzir é pegar dados para transformar em um (somar valores por exemplo)
  const soma = numbers.reduce((item, accumulator) =>{
    return item + accumulator;
  });
  return console.log(soma);
}

//main
{
  number();
}