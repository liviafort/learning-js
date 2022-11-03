function valoresform(){
  const form = document.querySelector("#my-form");
  const submitButton = document.querySelector("#submit-button");
  const nameImput = document.querySelector("#name");
  const emailImput = document.querySelector("#email");
  submitButton.addEventListener("click", (event) => {
  event.preventDefault(); //pra não recarregar a pagina assim que der submit
  const nameValue = nameImput.value, emailValue = emailImput.value;
  if(nameValue && emailValue){
    form.style.background = "green";
  }
  else{
    form.style.background = "red";
  }
  valoresitem(nameValue, emailValue);
});
};

function valoresitem(nameValue, emailValue){
  const items = document.querySelectorAll(".item");
  items.forEach((item, index) =>{
    if(index===0)
      item.innerHTML = `<h1>${nameValue}</h1>`;
    if(index===1)
      item.innerHTML = `<h1>${emailValue}</h1>`;
  });
};

/*outras forma de fazer evento
nameImput.addEventListener("change", (event) =>{
    console.log(event.target.value);
  });*/

//main
{
  valoresform();
}