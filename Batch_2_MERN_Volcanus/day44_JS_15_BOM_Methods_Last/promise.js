// promise has 3 stage

// 1. Pending State
// 2. Fullfill -> resolve -> .then()
// 3. reject   -> reject  -> .catch()

let gourav = 100;
let ashish = 1000;
const p = new Promise((resolve, reject) => {
  let rupess = gourav - ashish;
  if (ashish > rupess) {
    //    resolve("Thik hai bhai mai de dunga")
    resolve({  
      gourav,
      data: "Bhai mai tere liye hameshaa khada hu tu bas bol de",
    });
  } else {
    reject("This is my backup plan ");
  }
});
p.then((msg) => msg.gourav + 500000)
  .then((data) => console.log(data))
  .catch((msg) => console.log(msg));
