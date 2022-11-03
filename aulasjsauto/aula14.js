const nameImput = document.querySelector("#name");
const emailImput = document.querySelector("#email");
const submitBtn = document.querySelector("#submit-button")
const mensagem = document.querySelector(".msg");
const items = document.querySelector(".items");

submitBtn.addEventListener("click", (event) =>{
  event.preventDefault();
  const nameValue = nameImput.value;
  const emailValue = emailImput.value;
  if(!nameValue || !emailValue){
    mensagem.textContent = "Preencha corretamente!";
    mensagem.style.background = "red";
    setTimeout(() =>{
      mensagem.textContent = "";
      mensagem.style.background = "";
    }, 3000);
    return;
  }
  mensagem.textContent = "Formulário enviado!";
  mensagem.style.color = "green";
  const li = document.createElement("li");
  li.classList = "item";
  li.innerHTML = `Nome: ${nameValue} <br> Email: ${emailValue}`;
  items.append(li);
  nameImput.value = "";
  emailImput.value = "";
});