// loops - for, while, do-while

const name = "Superman";

// for(let i=0; i<5; i++){
//     console.log(name)
// }

let num = 5;
let i;
for (i = 2; i < num; i++) {
  if (num % i === 0) {
    console.log("Not a prime number");
    break;
  }
}
if (i == num) {
  console.log(`${num} is Prime Number`);
}
