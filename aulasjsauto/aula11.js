
//main
{
  //selecionar apenar um elemento
  const selecionarh1 = document.getElementById("add-user"), clicou = 0;
  const selectsubmit = document.addEventListener("click", () =>{
    selecionarh1.innerText = "Clicado";
  });
  const selecionarform = document.querySelector(".container #my-form");
  console.log(selecionarform);
  const selectionaritems = document.querySelector(".items");
  console.log(selectionaritems);
  //selecionar muitos elementos
  const allitems = document.querySelectorAll(".item");
  console.log(allitems[1]);
  //pelo getElement não da para usar como lista.
  //use mais o querySelector.
};