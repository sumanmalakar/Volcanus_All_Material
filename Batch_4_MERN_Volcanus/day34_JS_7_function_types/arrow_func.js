// function print() {
//     console.log("This is normal fuction")
// }
// print()

// const print = () => console.log("This is arrow function")
// print()
// const print = () => "This is arrow function"
// const result = print()
// console.log(result)

const sum = (a, b) => {
  console.log(`sum of ${a} and ${b} = ${a + b}`);
  return a * b;
};

console.log(sum(10, 20));
