// object, spread operator, distructuring, loops [for, while, do - while, forIn , forOf, forEach]

const hero1 = {
  name: "Superman",
  age: 400,
  salary: 450000,
  gmail: "superman@gmail.com",
  empid: 78993,
  post: "MERN Developer",
};
// Spread Operator [Coping property from any other oject/array]
const hero2 = { ...hero1, name:"Spiderman",empid:12345678890, universe:'Marvel' };
// console.log("hero1 = ", hero1);
// console.log("hero2 = ", hero2);

// const arr1 = [10,20,30]

// const arr2 = [...arr1,40,50,60]

// console.log("arr1 = ",arr1)
// console.log("arr2 = ",arr2)

const hero = {
  name: "Superman",
  age: 400,
  salary: 450000,
  gmail: "superman@gmail.com",
  empid: 78993,
  post: "MERN Developer",
};
// console.log(hero.name, hero.age, hero.salary)

const {name,age,gmail} = hero

console.log(name,gmail,age)