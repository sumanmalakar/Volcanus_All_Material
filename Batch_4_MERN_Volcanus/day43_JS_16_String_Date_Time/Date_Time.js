const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const D = date.getDate();
const day = date.getDay();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const millisecond = date.getMilliseconds();

// console.log("...Date...")
// console.log(`${day}-${month+1}-${year}`)
// console.log("...Time...")
// console.log(`${hour}:${minute}:${second}:${millisecond}`)

// console.log("setTiemout");

// setTimeout(() => {
//   console.log("Inside SetTimeout");
// }, 5000);

// console.log("SetInterval")
setInterval(() => {
  const date = new Date();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const millisecond = date.getMilliseconds();

  console.log(`${hour}:${minute}:${second}:${millisecond}`)
}, 1000);
