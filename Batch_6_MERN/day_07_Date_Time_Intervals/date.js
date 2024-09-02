const newDate = new Date();

const year = ["jan","feb","march","april","may","june","jul","aug","sep"]

// console.log(newDate)
// console.log("Date ",newDate.getDate()) 
// console.log("month ", newDate.getMonth(), year[newDate.getMonth()]); 
// console.log("Date ", newDate.getHours()); 

// console.log("before set time out")
// setTimeout(() => {
//     console.log("Inside setTime Out")
// }, 3000);
// console.log("after set time out")

// setInterval(() => {
//     console.log("hello")
// }, 100);

setInterval(() => {
    let date = new Date();
    console.log(date.toLocaleString())
}, 1000);