// console.log("Hello console")

// const container = document.querySelector('.container');

// // console.log(container)

// const items = container.querySelector('.items:nth-child(1)')

// console.log(items.innerText)
// console.log(items.innerHTML)
// console.log(items.textContent)

// items.style.backgroundColor = "yellow";
// // items.innerText = 'Neetu'
// items.innerText = "<span>Neetu</span>";
// items.innerHTML = '<span>Neetu</span>'

const changeStyle = () => {
  const items = document.querySelectorAll(".items");
  // console.log(items.length)
  // items.forEach(()=>)

  for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "yellow";
    items[i].style.color = "black";
    items[i].style.padding = "10px";
    items[i].style.border = "2px solid blue";
  }
};

document.querySelector("#btn").addEventListener("click", changeStyle);
// changeStyle()


// console.log(document.querySelector("#input"))


const getInputValue = () =>{
const input = document.querySelector("#input");
console.log(input.classList)
console.log(input.value)

}

getInputValue()

// Airtel#123
