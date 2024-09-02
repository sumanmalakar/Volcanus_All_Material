const str = "abcde";
let newStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  newStr += str[i];
}

console.log(str);
console.log(newStr);
