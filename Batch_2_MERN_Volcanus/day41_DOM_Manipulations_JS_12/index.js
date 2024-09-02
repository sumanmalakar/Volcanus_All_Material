// const element = document.querySelector('.container')

// childNodes
// console.log(element.childNodes)

// console.log(element.children[0])

// firstElementChild
// console.log(element.firstElementChild)

// lastElementChild
// console.log(element.lastElementChild.innerHTML)

// const child2 = document.querySelector('.child2')

// console.log(child2.innerHTML)

// console.log(child2.previousElementSibling.innerHTML)

// console.log(child2.nextElementSibling)

// const div = document.createElement('h1')

// div.setAttribute('class',"superman")
// div.setAttribute('id','batman')

// div.innerText = "This is my dynamic div "

// div.style.backgroundColor = "purple"
// div.style.padding = '10px'

// console.log("This is my div = ",div)

// console.log("div TExt =",div.innerText)

// document.querySelector('body').appendChild(div)

const button = document.createElement("button");

button.innerText = "Dynamic button";
button.setAttribute("class", "btn");

document.querySelector("body").appendChild(button);

// const createText = document.createTextNode('Add Element')

// button.appendChild(createText)
console.log(button.innerText);

const createDiv = () => {
  //   console.log("console");
  const div = document.createElement("h1");

  div.setAttribute("class", "superman");
  div.setAttribute("id", "batman");

  div.innerText = "This is my dynamic div ";

  div.style.backgroundColor = "purple";
  div.style.padding = "10px";

  console.log("This is my div = ", div);
  console.log("div TExt =", div.innerText);

  document.querySelector("body").appendChild(div);
};

const div = document.createElement("h1");

div.setAttribute("class", "superman");
div.setAttribute("id", "batman");

div.innerText = "This is my dynamic div ";

div.style.backgroundColor = "purple";
div.style.padding = "10px";

console.log("This is my div = ", div);
console.log("div TExt =", div.innerText);

document.querySelector("body").appendChild(div);
document.querySelector(".btn").addEventListener("click", createDiv);

document.querySelector(".remove").addEventListener("click", () => {
    const parent = div.parentNode;

    console.log("this is parent = ", parent);

    parent.removeChild(div);
});
