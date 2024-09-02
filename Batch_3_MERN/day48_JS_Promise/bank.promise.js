let adhar = true;
let panCard = true;
let minBalace = 1000;

const bankAC = new Promise((resolve, reject) => {
  if (adhar && panCard && minBalace) {
    resolve({ minBalace, msg: "You can open account in our bank" });
  } else {
    reject("You should have adhar and panCard to open ac in our bank ");
  }
});

bankAC
  .then((data) => data.minBalace)
  .then((aditya) => console.log(`Total amout ${aditya + 100}`))
  .catch((error) => console.log(error));
