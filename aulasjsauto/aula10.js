class Person{
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  //método dinâmico
  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }
  //método estático (não precisa da instância da classe)
  static speak(){
    console.log("Helloo, sou estático");
  }
};

//classe para demonstrar herança
class Animal{
  constructor(name, age, sound){
    this.name = name;
    this.age = age;
    this.sound = sound;
  }
  speak(){
    console.log(`${this.name}, tem ${this.age} anos e faz ${this.sound}`);
  }
};

class Dog extends Animal{
  constructor(name, age, sound){
    super(name, age, sound); //puxa os item da classe mãe
  }
};

class Cat extends Animal{
  constructor(name, age, sound){
    super(name, age, sound); //puxa os item da classe mãe
  }
};

//main
{
  const person = new Person("Lívia", "Fortunato", 19);
  console.log(person);
  console.log(person.getFullName());
  //chamar método estático
  Person.speak();
  //classe animal com herança
  const cat = new Cat("Leão", 6, "MIAU");
  console.log(cat);
  console.log(cat.speak());
}