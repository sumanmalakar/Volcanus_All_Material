const str = "ram Sharma";

let targetStr = "m";

let firstOcu = 0;
let lastOcurr;

for (let i = 0; i<str.length; i++) {
  if (firstOcu == 0) {
    firstOcu = i;
  } else if (str.charAt(i) === targetStr) {
    // if(str[i] == targetStr)
    // firstOcu = i;
    lastOcurr = i;
    // break;
  }
}
console.log(firstOcu);
console.log(lastOcurr);

console.log("console.");
