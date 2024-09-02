//Surface area of cylinder
// A = 2*PI*r*r + 2*PI*r*h

const sArea = (r, h) => 2 * Math.PI * r * r + 2 * Math.PI * r * h;

const r = parseFloat(prompt("Enter the radius of cylinder")) 
const h = parseFloat(prompt("Enter the height of cylinder"))
const result = sArea(r,h)

console.log(`The Surface area of cylinder with radius "${r}" and height "${h}" =  ${result}`)
alert(
  `The Surface area of cylinder with radius "${r}" and height "${h}" =  ${result}`
);