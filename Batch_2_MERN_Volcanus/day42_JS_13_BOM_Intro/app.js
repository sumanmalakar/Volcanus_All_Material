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

// console.log(window.location)

// href
const href = window.location.href;
const text = 'Superman'

document.querySelector("#bom").innerHTML = `<h1>${text}</h1>
<p>text</p>
`;
