function objeto(){
  const person = {
    firstname: "Livia",
    lastname: "Fortunato",
    age: 19,
    hobbies: ["dormir", "comer", "jogar"],
}
  //adiciona elemento -> person.dog = "Leão";
  //adiciona dog como objeto
  person.dog = {
    name: "Leão",
    ageanimal: 3,
  }
  return person;
};

function exercicio(){
  const todos = [
    {
      id: 1,
      description: "estudar",
      isCompleted: false,
    },
    {
      id: 2,
      description: "ler",
      isCompleted: true,
    },
    {
      id: 3,
      description: "criar",
      isCompleted: true,
    },
  ];
  return todos;
}

//main
{
  //um desctructor economiza linhas para não ter que declarar constantes para os atributos do objeto
  const {firstname, lastname, age, hobbies, dog} = objeto();
  const selecionar2hobbie = hobbies.forEach((item, index) => {
    if(index === 1){
      console.log(item);
    }
  });
  console.log(objeto());
  //tentar acessar o segundo description
  const listatodos = exercicio();
  const acessartodos = listatodos.forEach((item, index) => {
    if(index === 1){
      console.log(listatodos[index].description);
    }
  });
}