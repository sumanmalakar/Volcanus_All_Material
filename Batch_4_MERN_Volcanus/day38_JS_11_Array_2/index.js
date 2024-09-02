// const arr = [10,20,30,40,50,"superman","spiderman","thor","hulk","chennai express"];

// const mySlice = (start,end)=>{
//     const temp = [];
//     for(let i=start; i<end; i++){
//        temp.push(arr[i])
//     }
//     return temp;
// }
// console.log("original slice ",arr.slice(5,7))
// console.log("apna slice ",mySlice(5,7))

// const bollywood = ["pk","3 - idiots","Shaadi me jaroor aana","12th Fail"]
// const southIndian = ["Robot", "Salaar","Bahubali","KGF","Puspa"]

// const allMovies = bollywood.concat(southIndian)

// console.log(allMovies)

// array searching methods
// indexOf
const phones = [
  "iphone",
  "redmin",
  "oneplus",
  "realme",
  "redmi",
  "sony xperia",
  "samsung ultra s24",
  "asus",
  "blackberry",
];

// console.log(phones.lastIndexOf('redmi'))
// console.log(phones.includes('Iphone'))
// console.log(phones.sort())

// const numbers = [9,1,4,3,5,0,2,7,6,8]
// const numbers = [94, 3450, 430, 3130, 53430, 0, 24340, 567, 6566, 6568];

// console.log(
//   numbers.sort((a, b) => {
//     console.log(b - a);
//     return b - a;
//   })
// );

// const arr = [10,20,30,40];

// console.log(arr.toString())

const arr = [
  10, 20, 30, 40, 1, 2, 3, 4, 5, 6, 7, 8, 843, 434, 34, 3, 3, 23, 245, 67,
];
const target = 2405;
let i = 0;
while (i < arr.length) {
  if (arr[i] == target) {
    console.log("element found", i);
    break;
  }
  i++;
}
if(i== arr.length){
    console.log("element not found")
}