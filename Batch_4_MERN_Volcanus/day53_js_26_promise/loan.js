let suprmanAlreadyMony = 200;
let loanAmount = 50;
let batman = 100;

const loan = new Promise((resolve, reject) => {
  let remainingAmount = batman - loanAmount;
  if (remainingAmount > 0) {
    let obj = {
      message: "Bhai fir kv lage to bolna",
      loanAmount,
      iphone: 10000,
    };
    resolve(obj);
  } else {
    reject({ message: "Bhai av nhi de paungaa" });
  }
});

loan
  .then((res) => {
    console.log(res.message);
    return res.loanAmount + suprmanAlreadyMony;
  })
  .then((res) =>
    console.log(
      `I started my own startup with harsh help now i have ${res} money `
    )
  )
  .catch((err) => console.log(err));
