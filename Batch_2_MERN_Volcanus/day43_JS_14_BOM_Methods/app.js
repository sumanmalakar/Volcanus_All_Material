console.log("JavaScript Browser Object Modal");
// console.log(window)

// console.log(window.innerWidth)
// console.log(window.innerHeight)

const innerHeight = window.innerHeight;
const innerWidth = window.innerWidth;

document.querySelector(".superman").innerHTML = `
<h1>Browser InnerHeight = ${innerHeight}</h1>
<h1>Browser InnerWidth = ${innerWidth}</h1>
`;



// href
const href = window.location.href;
const hostname = window.location.hostname

document.querySelector(".bom").innerHTML = `

<h3>href = ${href}</h3>
<h3>Host Name = ${hostname}</h3>
<h3>origin = ${window.location.origin}</h3>
`;


console.log(window.location)