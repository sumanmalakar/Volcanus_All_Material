// revise

// 1. Arrow function

// normal function
// function sum(a,b){
//     console.log(a+b);
// }
// // sum(10,20)

// arrow funtion
const sum = (a, b) => {
  // console.log("This is my arrow function", a+b);
  return a + b;
};
// sum(10,20);

// const sum2 = (a,b) => a+b;

// console.log(sum2(1,2))

let hero1 = "superman";
let hero2 = "spiderman";

// "superman" is belong from "DC" and "spiderman" is belong from "Marvel"

// console.log(" {hero1} is belong from 'DC' and 'spiderman' is belong from 'Marvel' ")

// console.log(hero1+'is belong from "DC" ')

// console.log(`"${hero1}" is belong from "DC" and "${hero2}" is belong from 'Marvel'`)

// tarnary operator

// const age = 20;
// (age > 18)
//   ? console.log("you can drive")
//   : console.log("you can not drive");

const person = {
  Name: "superman",
  age: 100,
  salary: 12345,
  gmail: "superman@gmail.com",
};
// console.log(person.salary)
// console.log(person.age);
// console.log(person.gmail)

// const person2 = {
//   Name: "spiderman",
//   age: 400,
//   salary: 12345,
//   gmail: "superman@gmail.com",
// };

// const person2 = {...person,Name:'spiderman', time:'1233', salary:0}

// console.log(person2)

// const arr1 = [10,202,30,40,50]

// const arr2 = [...arr1, 12.3,"superman", "spiderman"]

// console.log(arr2)

const data = [
  {
    Name: "superman",
    age: 100,
    salary: 12345,
    gmail: "superman@gmail.com",
  },
  {
    Name: "supiderman",
    age: 200,
    salary: 1,
    gmail: "supiderman@gmail.com",
  },
  {
    Name: "saktiman",
    age: 100,
    salary: 12345,
    gmail: "superman@gmail.com",
  },
];

// console.log(data[1].age)

// data.map((d)=>console.log(d.Name, d.gmail))

const product = [
  { title: "iphone", price: 100000, category: "mobile" },
  { title: "oneplus", price: 30000, category: "mobile" },
  { title: "hp", price: 80000, category: "laptop" },
  { title: "dell", price: 70000, category: "laptop" },
  { title: "ipad", price: 10000, category: "tablet" },
  { title: "i watch", price: 10000, category: "smartwatch" },
];

const result = product.filter(
  (data) => data.category === "mobile" && data.price < 50000
);


// console.log(result);

const addData = () =>{
    console.log("before "+product)
    product.push({ title: "i", price: 10, category: "tv" });
    console.log("after "+product[6].Name)
}

addData()
