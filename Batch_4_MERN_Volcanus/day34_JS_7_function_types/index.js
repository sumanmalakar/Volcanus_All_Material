// function with arguments & with return type
function sum(a,b){
    console.log(`sum of ${a} and ${b} = ${a+b}`)
    return a+b;
}
// function with arguments & with no return type
function mul(a, b) {
  console.log(`multiply of ${a} and ${b} = ${a * b}`);
}
// function without arguments & with return type
function div() {
    let a = 123
    let b = 5
  console.log(`division of ${a} and ${b} = ${a / b}`);
  return a / b;
}
// function without arguments &  with no return type
function test() {
  let a = 300;
  let b = 10;
  console.log(`division of ${a} and ${b} = ${a / b}`);
}

// console.log(sum(10,20))
// const result = sum(10,20)
// console.log(result)
// mul(20,20)

// const resulDivision = div()
// console.log(resulDivision)
test()