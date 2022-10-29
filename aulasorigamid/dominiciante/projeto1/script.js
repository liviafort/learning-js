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

//forEACH e ArrowFunction
const tituloss = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos); //transforma em array
titulosArray.forEach(function(item){
  console.log(item);
});
//arrow function
const imgs = document.querySelectorAll('img');
imgs.forEach((item)=>{
  return console.log(item);
});
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((item) =>{
  return console.log(item.innerText);
})

//CLASSES E ATRIBUTOS
//CLASSLIST Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.
const menu = document.querySelector('.menu');
console.log(menu.className); // string
console.log(menu.classList); // lista de classes
console.log(menu.classList.add('ativo', 'mobile')); // duas classes
console.log(menu.classList.remove('ativo'));
console.log(menu.classList.toggle('ativo')); // adiciona/remove a classe
console.log(menu.classList.contains('ativo')); // true ou false,olha se existe
console.log(menu.classList.replace('ativo', 'inativo')); //substitui a classe ativo por inativo
//attributes
const computadorres = document.querySelector('.computadores');
console.log(computadorres.attributes); // retorna todos os atributos
console.log(computadorres.attributes[0]); // retorna o primeiro atributo
//GETATTRIBUTE E SETATTRIBUTE
//Métodos que retornam ou definem de acordo com o atributo selecionado
const img = document.querySelector('img');
img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt
img.hasAttributes(); // true / false se tem algum atributo
//READ ONLY VS WRITABLE
/*Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.*/

const pc = document.querySelector('.computadores');
console.log(pc.className); // string com o nome das classes
console.log(pc.className += ' vermelho'); // adiciona vermelho à string
console.log(pc.attributes);
console.log(pc.attributes = 'class="ativo"'); // não funciona, read-only
console.log(pc.attributes);
//exercicio
// Adicione a classe ativo a todos os itens do menu
const addmenu = document.querySelectorAll('.menu a');
addmenu.forEach((item) =>{
  item.classList.add('ativo');
})
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
let i = 0;
addmenu.forEach((item) =>{
  if(i!==0){
    item.classList.remove('ativo');
  }
  i++;
});
// Verifique se as imagens possuem o atributo alt
const temimg = document.querySelector('img');
console.log(temimg.classList.contains('alt'));
// Modifique o href do link externo no menu
const linksk = document.querySelector('a[href^="http"]');
linksk.setAttribute('href', 'https://github.com/liviafort/learning-js');

//DIMENSÕES E DISTÂNCIAS
const sectionlista = document.querySelector('.computadores-lista');
console.log(sectionlista.clientHeight); // height + padding
console.log(sectionlista.offsetHeight); // height + padding + border
console.log(sectionlista.scrollHeight); // height total, mesmo dentro de scroll
//OFFSETTOP E OFFSETLEFT
const section2 = document.querySelector('.computadores-lista');
// Distância entre o topo do elemento e o topo da página
console.log(section2.offsetTop);
// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
console.log(section2.offsetLeft);
//GETBOUNDINGCLIENTRECT()
/*Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.*/
const computerh1 = document.querySelector('h1');
const recth1 = computerh1.getBoundingClientRect();
console.log(recth1.height); // height do elemento
console.log(recth1.width); // width do elemento
console.log(recth1.top); // distância entre o topo do elemento e o scroll
if(recth1.top < 0){
  console.log('passou do elemento');
}
//WINDOW
console.log(
window.innerWidth, // width do janela
window.outerWidth, // soma dev tools também
window.innerHeight, // height do janela
window.outerHeight, // soma a barra de endereço
window.pageYOffset, // distância total do scroll vertical
window.pageXOffset,); // distância total do scroll horizontal
if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}
//MATCHMEDIA();
/*Utilize um media-querie como no CSS para verificar a largura do browser*/
const small = window.matchMedia('(max-width: 600px)');
if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}