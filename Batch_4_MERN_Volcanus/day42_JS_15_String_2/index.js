// // charAt - To find a character in particular index of place
// const str = "Superman"

// // To find length of string
// console.log("To find length ",str.length)

// // console.log(str.charAt(0))
// for(let i=0; i<str.length; i++){
//     console.log(str.charAt(i))
// }

// // EducatIon => vowels => a,e,i,o,u
// EducaTIon

const vowels = (str) =>{
    let vowelsCount = 0;
    let constCount = 0;
    let vowels = [];
    let consonent = [];

    let str2 = str.toLowerCase();
    for(let i = 0; i<str2.length; i++){
        let char = str2.charAt(i);
        if(char == 'a' || char == 'i' || char == 'e' || char == 'o' || char == 'u'){
            vowelsCount++;
            vowels.push(str.charAt(i))
        }else{
            constCount++;
            consonent.push(str.charAt(i))  } }
    console.log("Total Vowels Count = ",vowelsCount)
    console.log(vowels)
    console.log("Toal Consonent Count = ",constCount);
    console.log(consonent)}

// const str = "eDuCAtIon"
// vowels(str)

// const stre = "$up^r(m@n!#%*{"

// indexof
// const str = "Sopermanu"

// console.log(str.indexOf('u'))

// split by

const str = "The superman is belong from DC and his salary is $3000";

console.log(str.split(' '));


