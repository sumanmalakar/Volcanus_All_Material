const input = prompt("For S.I. Enter @ , for C.I. Enter $");

const si = (p, r, t) => (p * r * t) / 100;

const ci = (p, r, n, nt) => {
  let base = p * (1 + r / n);
  let expo = nt;
  return Math.pow(base, expo);
};

if (input == "@") {
  let p = parseFloat(prompt("Enter principle amount "));
  let r = parseFloat(prompt("Enter rate "));
  let t = parseFloat(prompt("Enter time "));

  // console.log(si(p,r,t))
  const result = si(p, r, t);
  alert("The Simple Interest = " + result);
  
} else if (input == "$") {
  let p = parseFloat(prompt("Enter principle amount "));
  let r = parseFloat(prompt("Enter rate "));
  let t = parseFloat(prompt("Enter time "));
  let nt = parseFloat(prompt("Enter number of time "));

  // console.log(si(p,r,t))
  const result = ci(p, r, t, nt);
  alert("The Compund Interest = " + result);
} else {
  alert("Invalid Input");
}
