//manipulando elementos do DOM
//main
{
  const items = document.querySelector(".items");
  console.log(items.firstElementChild); //pega primeiro filho da ul
  //remover primeiro e ultimo elemento
  items.firstElementChild.remove();
  items.lastElementChild.remove();
  //lista de filhos
  console.log(items.children);
  //mudar texto do item
  items.children[0].textContent = "Item Um";
  //mudar HTML
  items.lastElementChild.innerHTML = "<h1>ITEM 3</h1>"
  //mudar background do botao
  const btn = document.querySelector(".btn");
  btn.style.background = "pink";
  //remover todos os li
  const itemli = document.querySelectorAll(".item")
  itemli.forEach((item) =>{
    item.remove();
  });
  const items2 = document.querySelector(".items");
  console.log(items);
  //remover items do documento
  items.remove();
}
