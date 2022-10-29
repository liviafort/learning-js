//seleção de elementos

const computadoresSection = document.getElementById('computadores');
console.log(computadoresSection);
console.log(computadoresSection.innerText);
const contato = document.getElementsByClassName('grid-section contato');
console.log(contato[0]);
const pcs = document.getElementsByTagName('li');
console.log(pcs[0]);
const computadores = document.querySelector('.computadores');
console.log(computadores);
const contato2 = document.querySelector('#contato');
console.log(contato2);
const ultimoItem = document.querySelector('.computadores-lista li:last-child');
console.log(ultimoItem);
const linkCSS = document.querySelector('[href^="https://"]');
console.log(linkCSS);
const primeiroUl = document.querySelector('ul');
console.log(primeiroUl);
// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');
console.log(navItem);
//tudo
const gridSection = document.querySelectorAll('.grid-section');
console.log(gridSection[1]);
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosComputadores = document.querySelectorAll('.computadores-lista img');
console.log(fotosComputadores);
//HTMLCOLLECTION VS NODELIST
const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');
titulo.classList.add('grid-section');
console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens
//ARRAY-LIKE
gridSection.forEach(function(item, array){
  console.log(item, array);
});
const arrayGrid = Array.from(gridSectionHTML);
console.log(arrayGrid);
//exercicio
//retornar todas as imagens:
const todasimg = document.querySelectorAll
('img');
console.log(todasimg);
//retornar imagens que começam com a palavra imagem
const imagenspc = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagenspc);
//selecionar links internos onde href começa com #
const links = document.querySelectorAll('[href^="https://"]');
console.log(links);
//selecione primeiro h2 dentro de animais-descrição
const animaisdescricao = document.getElementsByTagName('h2');
console.log(animaisdescricao[1]);
//ultimo p do site
const ultimop = document.getElementsByTagName('p');
const tamanhop = ultimop.length;
console.log(ultimop[tamanhop - 1]);

