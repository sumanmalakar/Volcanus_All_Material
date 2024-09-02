const h1 = document.getElementsByTagName("h1");

// console.log("h1 length ", h1.length);

// h1[1].innerText = "<p>Ram</p>"

// h1[1].innerHTML = '<a href="https://www.google.com" target="_blank">Ram</a>'

// for(let i=0; i<h1.length; i++){
//     let input = prompt("Enter your text")

//     h1[i].innerText = input
// }

// const element = document.getElementsByClassName('h1')
// console.log("this is my class element ",element)

// const element = document.getElementById('h1')
// console.log(element)

const query = document.querySelector('#h1')

// console.log("this is coming from query selector", query)

query.innerHTML = "<a href=https://www.google.com>Google</a>"