// const age = 18;

// // if(age>18){
// //     console.log("You can drive")
// // }
// // else{
// //     console.log("You can not drive")
// // }

// age >= 18 ? console.log("You can drive") : console.log("You can not drive");

let n = 496440
let digitSum = 0;

while(n>0){
    // let temp = Math.round(Math.floor(n % 10)); 
    let temp = n % 10; 
    digitSum += temp 
    n = Math.floor((n/10))
    console.log("remider = ", n)
}


console.log("sum = "+digitSum)