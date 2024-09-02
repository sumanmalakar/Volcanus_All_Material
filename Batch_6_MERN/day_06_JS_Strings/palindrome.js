const str = "ab1a1221aba";

let s = 0; let e = str.length -1;

while(s<e){
    if(str[s] != str[e]){
        console.log("Not Palindrome");
        break;
    }
    s++; e--;
}

if(s>=e){
    console.log("Palindrom")
}