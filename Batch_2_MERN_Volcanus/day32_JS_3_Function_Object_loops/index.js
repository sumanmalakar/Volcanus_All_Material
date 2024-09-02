// normal function declaration
// function print(){
//     console.log("This is a function body");
// }
// print()

// function with return type
// function sbiRateOfIterest() {
//     return 7.8
// }
// console.log(sbiRateOfIterest())

// function with arguments
// function sum(a,b){
//     return a+b;
// }

// const result = sum(10,20)
// console.log(result)

// Arrow Function

// function print(){
//     console.log("This is normal function")
// }

// Normal arrow function declaration
// const print2 = () => console.log("This is arrow function")
// print2()

// Arrow function with return value
// const rateOfInterest = () => 7.9
// rateOfInterest();
// console.log(rateOfInterest())

// function sum (){
//     return 70.0
// }

// const sum = () => 70.0;

//Arrow function with argument and return type
// const sum = (a,b) =>{
//   console.log(a+b)
// }
// // console.log(sum(10,20))
// sum(10,20)

const laptop1 = {
  model_name: "Hp probook 830 G8",
  brand_name: "Hp",
  ram: "10GB",
  HHD: "500GB",
  SSD: "300GB",
  Processor: "Intel i-9 9th Gen",
  price: 75000,
};
console.log("laptop1 object ", laptop1);

const {ram,SSD,price} = laptop1

console.log(ram,SSD,price)

//spread operator
// const laptop2 = { ...laptop1, price: 1000, model_name: "Sony" };

// console.log("laptop2 object ", laptop2);

