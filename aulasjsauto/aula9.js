function sum(pa, pb){
  return pa+pb;
};

//main
{
  console.log(sum(4, 5));
  console.log(sum(9, -4));
  //mesma funcao sum só que com arrow
  const arrowsum = (p1, p2) => p1+p2;
  console.log(arrowsum(7,3));
};