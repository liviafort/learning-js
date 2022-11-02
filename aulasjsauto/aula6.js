//tipos de loops
//-->foreach, map, reduce já foram falados em aulas passadas
function loops(total){
  numbers = [1,2,3,4,5,6,7,8,9,10];
  //for
  for(let i=0; i<total;i++){
    console.log(i);
  }
  //for of 
  for(let number of numbers){
    console.log(number);
  }
  //for in
  for(let number in numbers){
    console.log(numbers[number]);
  }
  //while
  let i = 0;
  while(i<total){
    console.log(i);
    i++;
  }
}

//main
{
  loops(10);
}