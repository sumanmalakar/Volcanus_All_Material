// for -> Number of Iteration know
// while -> Number of Iteration Unknow
// do - while -> Atleast Run Once
// For In -> key value {object}
// For Of -> To Iterate the array
// For each -> element, index, array

let number = 10;
let sum = 0;
while (number !== 0) {
  sum += number; // sum = sum + number
  number--; // number = number - 1
}

// console.log("Sum is = " , sum);

// 496440 = 4+9+6+4+4+0 = 27

let num = 496440
let result = 0
while(num == 0){
    let remider = num%10
    console.log("Remider at this point ", remider)
    result += remider
    console.log("Sum at this point = ",result)
    num = Math.floor(num/10)
}
// console.log("final sum = ", result)


// let age = 15

// do{
//     console.log("User are eligible for voter Id")
//     age--;
// }while(age>20)


// forIN

const hero = {
    name:'superman',
    age:50,
    salary:457809,
    gmail:"superman@gmail.com"
}

// for(let key in hero){
//     // console.log(key)
//     console.log(hero[key])
// }

// const arr = ["Apple", "Orange", 230, 40, 21.2344];

// for(let abhisek of arr){
//     console.log(abhisek)
// }

// for(let key in arr){
//     console.log(key, arr[key])
// }