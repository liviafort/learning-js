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
