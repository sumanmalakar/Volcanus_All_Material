const removeSpecialChar = (str) => {
  // str = !@#FGT%#@*KH
  let specialChar = "";
  let Alphabet = "";

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    let ascii = char.charCodeAt(0);

    // A => 65
    // a => 97

    if ((ascii >= 65 && ascii <= 91) || (ascii >= 97 && ascii <= 123)) {
      //   Alphabet.push(char);
      Alphabet += char;
    } else {
      // specialChar.push(char)
      specialChar += char;
    }
  }
  console.log("All Alphabets = ", Alphabet);
  console.log("All Special Char = ", specialChar);
};

let str = "@#$S&^U%**P@((E^%*R()M#%^A(%#$N";

removeSpecialChar(str);
