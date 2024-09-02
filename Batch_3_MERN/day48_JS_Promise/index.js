// promise has three stage
// 1.Pending
// 2.Resolve => Fullfil => .then()
// 3.Reject => .catch()

// const p = new Promise((resolve, reject) => {
//   const age = 20;
//   if (age == 20) {
//     resolve("Age is 20, my promise resolve");
//   } else {
//     reject("Age is not 20, my promise rejected");
//   }
// });

// p.then((msg) => console.log(msg)).catch((msg) => console.log(msg));
