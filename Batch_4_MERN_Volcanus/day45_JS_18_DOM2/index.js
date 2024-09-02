// console.log("Hello Console")

const element = document.querySelector('h1')

console.log("className = ",element.className)
console.log("id = ",element.id )

// element.className = 'red'

// setTimeout(() => {
//     element.className = 'yellow'
//     console.log("Inside timeout")
// }, 2000);

// setTimeout(() => {
//     element.className = 'red'
//     console.log("Inside timeout");

// }, 4000);

// setInterval(() => {
//     element.className = "yellow";
// }, 1000);

// setInterval(() => {
//     element.className = "red";
// }, 2000);


element.style.backgroundColor = 'blue'
element.style.fontSize = '4rem'
element.style.color = 'black'

const body = document.querySelector('body');

setInterval(() => {
    // body.style.backgroundColor = 'blue'
    body.style.height = '100vh'
  body.style.backgroundImage = 'linear-gradient(to top, #30cfd0 0%, #330867 100%)'
  body.style.backgroundRepeat = 'no-repeat'
  body.style.backgroundSize = 'cover',
  body.style.backgroundPosition = 'center'

}, 1000);
setInterval(() => {
    body.style.backgroundColor = 'red'
}, 2000);
setInterval(() => {
    body.style.backgroundColor = 'yellow'
}, 3000);
setInterval(() => {
    body.style.backgroundColor = 'pink'
}, 4000);
setInterval(() => {
    body.style.backgroundColor = 'grey'
}, 5000);