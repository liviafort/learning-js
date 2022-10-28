//aula 1 e 2

//window.alert('olaaaa'); 
//retorna a url da pagina atual utilizando windows
const hrefpagina = window.location.href;
console.log(hrefpagina);
//confirma se é igual ao da pagina
if(hrefpagina === 'http://127.0.0.1:5500/aulasorigamid/dominiciante/'){
  console.log('é igual');
}
//seleciona o primeiro elemento da pagina que possua a classe ativo
const h1Selecionado = document.querySelector('.ativo');
//outros
console.log(h1Selecionado.classList);
h1Selecionado.addEventListener('click', function(){
  ('Clicou em ', h1Selecionado);
})
//retornar a linguagem da pagina
console.log(window.navigator.language);
//retornar tamanho da pagina
console.log(window.innerWidth);



