const sayHello = () => console.log("Hello arrow function");

// sayHello();

const sum = (a, b) => a + b;

// console.log(sum(10,20))
// sum(10,20)

let c = 10;
const threeSum = (a, b) => {
  console.log(`first number = ${a} and the second number = ${b}`);
  let c = 50;
  return a + b + c;
};
console.log("sum of three numbers = ", threeSum(10, 20));
