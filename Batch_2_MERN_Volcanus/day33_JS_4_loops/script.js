
// const arr = [10,20,"Superman","Spiderman",20989.34,400,"Neetu"]

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }

// console.log("length of array = ", arr.length);

// let i = 0;

// while(i<arr.length){
//     console.log(arr[i])
//     i++
// }

// do{
//     console.log(arr[i])
//     i++
// }while(i<arr.length)

// foreach , map ,fillter



// const arr = [10, 20, "Superman", "Spiderman", 20989.34, 400, "Neetu", "Batman"];

// for in loop
// for(let i in arr){
//    // console.log("Index of element = "+i+ " Actual element = "+arr[i]);
//     console.log(i,arr[i])
// }

// for of loop
// for(let x of arr){
// console.log(x)
// }


// const test = () =>{
//     console.log("this is a test function")
//     return sum = () => 20
// }

// // const result = test();

// console.log(sum())


const arr = [10, 20, "Superman", "Spiderman", 20989.34, 400, "Neetu", "Batman"];

arr.forEach((value,index,array)=>console.log(value,index,array))
