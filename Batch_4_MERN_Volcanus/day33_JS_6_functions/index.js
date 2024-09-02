function sum(a, b) {
  console.log(`Sum of ${a} and ${b} = ${a + b}`);
  alert(`Sum of ${a} and ${b} = ${a + b}`);
}
function sub(a, b) {
  console.log(`Sub of ${a} and ${b} = ${a - b}`);
  alert(`Sub of ${a} and ${b} = ${a - b}`);
}
function mul(a, b) {
  console.log(`Mul of ${a} and ${b} = ${a * b}`);
  alert(`Mul of ${a} and ${b} = ${a * b}`);
}
function div(a, b) {
  console.log(`Div of ${a} and ${b} = ${a / b}`);
  alert(`Div of ${a} and ${b} = ${a / b}`);
}

// sub(200,10)

let userChoice = parseInt(
  prompt(
    "For sum Enter 1 \n For sub Enter 2 \n For Mul Enter 3 \n For div Enter 4 \n"
  )
);
let userInput1 = parseInt(prompt("Enter first number "));
let userInput2 = parseInt(prompt("Enter second number "));

switch (userChoice) {
  case 1:
    sum(userInput1, userInput2);
    break;
  case 2:
    sub(userInput1, userInput2);
    break;
  case 3:
    mul(userInput1, userInput2);
    break;
  case 4:
    div(userInput1, userInput2);
    break;
  default:
    console.log("Invalid Input");
}
