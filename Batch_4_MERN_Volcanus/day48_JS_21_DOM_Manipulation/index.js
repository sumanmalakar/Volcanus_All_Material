// console.log("Hello Console")

// const h1 = document.createElement('li')

// h1.setAttribute('class','black')
// h1.setAttribute('id','h1')

// h1.innerText = 'This is my own h1'

// document.body.appendChild(h1)

// console.log("making my own tag ",h1)
const myElement = (msg, cls) => {
  const p = document.createElement("p");
  p.setAttribute("class", cls);
  p.innerText = msg;

  const div = document.querySelector('div')
  div.appendChild(p);
};

let input;

const getInput = () => {
  input = document.querySelector("#ip1").value;

  
  let i;
  for (i = 0; i < input.length; i++) {
    let ch = input.charAt(i);
    if (ch == "!" || ch == "@" || ch == "#" || ch == "$") {
      myElement("Your password is super Strong", "green");
      break;
    }
  }
  if (i == input.length) {
    myElement("Your password is Weak", "red");
  }

  //  console.log(input)
};
