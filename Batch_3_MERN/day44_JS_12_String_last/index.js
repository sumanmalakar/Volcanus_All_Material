// console.log("Hello Console..!")
// toUpperCase()
// toLowerCase()
// charAt()
// trim()
// charCodeAt()
// length

// indexOF => to find a particular character index
// const str = "Superman"
// const char = 'S'
// const index = str.indexOf(char)
// console.log(`The index of ${char} = ${index}`)


// replace => to replace a particular character in a string [first occurence of a character if the character repeated multiple time]
// const str = "SUpermanU"
// const brandNewString = str.replace('U','u')
// console.log("Resulted String = ", brandNewString)


// slice => to extract a piece of string from a string
// const str = "superman"
// console.log(str.slice(2,5))

// split => to covert a string into a array
// const str = "my name is superman"
// console.log(str.split(" ")[0].charAt(0).toUpperCase())
// console.log(str.split(" "))

// substring => return a part of a string from starting and ending [starting index will be included and ending index will excluded]
// const str = "$@Sm#";
// console.log(str.substring(2,4))

// palindrome => 121  LAL CTC
// const str = "superman"
// console.log()

// const isPanlindrome = (str)=>{

//     let 

// }
// const result = isPanlindrome("121")
// // console.log()

// // 121 is palindromic string
// // 121 is not a palindromic string 


const str = "1291"
let start = 0;
let end = str.length - 1;
let flag = true
while(start < end){
    if(str.charAt(start) != str.charAt(end)){
        flag = false
        break;
    }
    start++;
    end--
}
if(flag){
    console.log("Palindrome")
}else{
    console.log("Not a Palindrome")
}