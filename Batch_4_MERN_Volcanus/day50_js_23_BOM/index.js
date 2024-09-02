// console.log("Hello console")
const h1 = document.querySelector("h1");

// h1.innerText = window.innerWidth
// h1.innerText = window.innerHeight

document.querySelector("#dark").addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  // if (confirm("you are redirected to google.com \n Ok to proceed")) {
  // }
  location.assign("https://www.google.com");
});

document.querySelector("#light").addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  // if (confirm("you are redirected to amazon.in \n Ok to proceed")) {
  // }
  location.assign("https://www.amazon.in");
});
