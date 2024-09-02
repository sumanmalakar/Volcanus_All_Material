const sum = (a,b) => {
  let a = 10;
  let b = 20;
  console.log(`sum of ${a} and ${b} = ${a + b}`);

  const superman = () => {
    let c = 20;
    console.log(`Multiplication of a+b and c = ${(a + b) * c}`);
    // return (a + b) * c;
    return "superman"
  };

  sum()

//   return superman;

    return superman
};
const result = sum(10,20);

console.log(result());
