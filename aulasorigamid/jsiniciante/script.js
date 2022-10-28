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
 
//aula 4, 5, 6, 7, 8, 9
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
//funções
function soma(parcela1, parcela2){
  return parcela1+parcela2;
}
console.log(soma(1,2));
addEventListener('click', function(){
  console.log("VOCE CLICOU");
});
function digaoi(){
  console.log("oi");
}
digaoi();
//verificar se é true
function verificar(valor){
  if(!!valor === true){
    return console.log("é verdadeiro"); //da pra usar isTruthy()
  }
  return console.log("é falso");
}
verificar(1);
//calcular perimetro
function perimetro(lado1){
  return console.log(lado1*4);
}
perimetro(3);
//nome completo
function nomelivia(nome, sobrenome){
  return console.log(nome + ' ' + sobrenome);
}
nomelivia("livia maria", "fortunato");
//verifica se o numero par
function par(numero){
  if(numero%2===0){
    return console.log("par");
  }
  return console.log("impar");
}
par(2);
//tipo
function tipo(variavel){
  return console.log(typeof(variavel));
};
tipo('oi');
tipo(true);
tipo("oi" + 50);
//eventor scroll
addEventListener('scroll', function(){
  console.log("scroll");
});
//corrigir codigo
function precisovisitar(paises){
  var totalPaises = 193;
  return console.log(`ainda faltam ${totalPaises-paises}`);
}
function javisitei(paises){
  //totalPaises n existia no escopo
  var totalPaises = 193;
  return console.log(`ja visitei ${paises} de um total de ${totalPaises}`);
}
precisovisitar(20)
javisitei(20);
//aula 10, 11, 12
//objetos
var pessoa = {
  nome: 'Lívia',
  sobrenome: 'Maria Fortunato',
  nomeCompleto(){
    return `${this.nome} ${this.sobrenome}`;
  },
  idade: 19,
  cidadania: 'brasileira',
};
console.log(pessoa.nome);
console.log(pessoa.nomeCompleto());
var quadrado = {
  lado: 4,
  area: function(lado){
    return lado*2;
  },
  perimetro(lado){
    return lado*this.lado;
  },
}
console.log(quadrado.area(30));
console.log(quadrado.perimetro(30));
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}
menu.backgroundColor = '#000';
menu.color = 'blue';
menu.dimensao = '1366x786';
menu.height = 54;
console.log(menu.height);

var cachorro = {
  nome: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(homem){
    if(homem)
      return `auauauauauauauau`;
    return `cricricri`
  },
};
console.log(cachorro.latir(true));
console.log(cachorro.latir(false))
function areaQuadrado(lado){
  return lado * lado;
}
console.log(areaQuadrado.toString());
console.log(areaQuadrado.length);

var btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
  console.log("oooce clicou no btn");
})
var nome = 'livia';
console.log(nome.length);
console.log(nome.concat(['maria']));
console.log(nome.split('v'));
console.log(nome.toLocaleUpperCase());


