//utilização do exemplo da aula passada para observar características do JSON no navegador
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
  //JSON NÃO É LISTA
  const todos = JSON.stringify(exercicio());
  console.log(todos);
  //PARA VOLTAR PRA LISTA:
  const todoslistagain = JSON.parse(todos);
  console.log(todoslistagain);
}