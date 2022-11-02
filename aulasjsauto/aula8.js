//conceito Truty e False
function funcoes(){
  const x = ' '; //true
  const y = ''; //false
  const z = 0; //false
  const w = 1; //true
  const a = undefined; //false
  const b = null; //false
  const t = NaN; //false
  const k = []; //true
  const o = {}; //true
  //!! chega se é true ou false
  //! inverte o tipo booleano
  return o;
};

//main
{
  console.log(!!funcoes());
};