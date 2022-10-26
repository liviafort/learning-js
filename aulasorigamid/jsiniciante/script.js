//aula 1, 2, 3
var nome = "livia", //string
  idade = 19, //number
  numero = "19999", //string
  comida, //undefined
  tempo = null, //null
  simbolo = Symbol(), //symbol
  objeto = {}; //object
console.log(nome, idade, "    ", comida);
comida = "pão";
console.log(`ola meu nome é ${nome} e minha comida preferida é ${comida}`);
console.log(nome + 19);
var frase = "it's time";
console.log(typeof(nome));
let um, dois, tres, quatro, cinco;
console.log(um, dois, tres, quatro, cinco);
 console.log(isNaN(numero + nome + idade));
 console.log(isNaN(19 / numero));
 console.log(isNaN(numero / nome))
 
//aula 4, 5, 6, 7, 8
var soma1 = 10 + (10*3) / 2;
console.log(soma1);
console.log(++soma1);
console.log(--soma1);
console.log(soma1*=soma1);
var frase = "oi";
console.log(+frase);
console.log(-'olaaaaaaa');
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);
console.log(+'200'+50);
console.log(total);
var numero = 5;
numero+=1;
console.log(numero);
console.log(49/2);
var possuicarro = true;
for(var i = 0; i<4; i++){
  if(possuicarro){
    console.log('possui carro sim');
    possuicarro = false;
  }
  else{
    console.log('não possui');
    possuicarro = true;
  }
}
if((5 - 5)&&(5 + 5)){
  console.log("verdadeiro");
}
else{
  console.log("falso");
}
var cor = "azul";
switch(cor){
  case "azul":
    console.log("cor do mar");
    break
  case "vermelho":
    console.log("cor da rosa");
    break;
  default:
    console.log("feche os olhos");
    break;
}
var idade = 19;
console.log(idade > 58);
console.log(idade < 58);
console.log((5-1)&&(5 - ' ')&&(5-2));
console.log(!!28);
