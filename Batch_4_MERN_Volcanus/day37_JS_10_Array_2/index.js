const arr = [10, 20, 30, 40, "superman", "spiderman", 30.45, "Marvel"];
// console.log(arr)
// push => insert new element in the ending of array
// console.log("before = ",arr)
// arr.push("batman")
// console.log("after = ",arr)
// pop => remove last element from array
// console.log("before = ",arr)
// arr.pop()
// console.log("after = ",arr)
// unShift => add new element at begging of the array
// console.log("before = ",arr)
// arr.unshift("Harsh")
// console.log("after = ",arr)
// shift => remove begging element from array
// arr.shift()
// console.log("before = ",arr)
// for(let i = 0; i<arr.length; i++){
//     console.log(i)
//     arr.shift();
// }
// while(arr.length != 0){
//  arr.shift();
// }
// console.log("before = ", arr);
// arr.splice(4,0)
// console.log("after = ",arr)
// console.log("before = ", arr);
// const result = arr.slice(4,7)
// // console.log("after = ",arr)
// console.log("resulted array = ",result)

const salary = [
  { emp: 1, salary: 100,name:'superman' },
  { emp: 2, salary: 201,name:'bill gates' },
  { emp: 3, salary: 305,name:'elon musk' },
  { emp: 4, salary: 250,name:'mukesh ambani' },
  { emp: 5, salary: 815,name:'spiderman' },
  { emp: 6, salary: 600,name:'batman' },
  { emp: 7, salary: 723,name:'ironman' },
  { emp: 8, salary: 750,name:'thor' },
  { emp: 9, salary: 9089,name:'captain america' },
];
let evenSalaryEmp = []

for(let element of salary){
    if(element.salary >300 && element.salary <750){
        evenSalaryEmp.push(element)
    }
}
console.log("even Salary array ",evenSalaryEmp)






// let result = salary.slice(3,9)
// console.log(result)
// let salarySum = 0

// // for(let element of result) salarySum = salarySum + element.salary
// // console.log(salarySum)
// for(let i=0; i<result.length; i++){
//     salarySum = salarySum + result[i].salary
//     // console.log(salarySum)
// }
// console.log(salarySum)
