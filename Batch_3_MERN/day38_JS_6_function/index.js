// function display(){
//   console.log("This a display function")
//   return "Superman"
// }
// // const result = display()

// function rateOfInterest(p,r,t){
//   // return (p*r*t)/100
//   return "Superman"
// }

// const result = rateOfInterest(5000,5,10)

// console.log("Overall profit "+(result))

// const user = "Superman";

// function display() {
//   const user = "Spiderman";
//   return user;
// }

// console.log(display(), user);

//Aryan - superman
// sanchit - spiderman
// siyush - spiderman
// atul - spiderman
// aditi - spiderman
// prashant - superman
// aditya - spiderman

// function hero(){
//   console.log("This is hero function")
// }
// hero()

//arrow function / one liner function
// const hero = () => console.log("This is hero function");
// hero()

// const rupees = () => "Superman"

// console.log(rupees())

const display = () => {
  console.log("This is my arrow function");
  
   setInterval(() => {
    const date = new Date();
    console.log("Date ", date.toLocaleDateString());
    console.log("Time ", date.toLocaleTimeString());
   }, 1000);
  return "Superman"
};

console.log(display())