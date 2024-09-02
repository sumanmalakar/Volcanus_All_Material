let p = new Promise((resolve, reject) => {
  let arr = [
    { id: 1, title: "iphone", price: 150000 },
    { id: 2, title: "iphone - 16", price: 250000 },
    { id: 3, title: "iphone - 17", price: 350000 },
  ];
  if (arr.length == 3) {
    resolve({ message: "Your API Request has been successfull", data: arr });
  } else {
    reject("n is a string ");
  }
});

p.then((msg) => {
  console.log("result at first then ", msg.message);
  return msg.data;
})
  .then((r) => console.log("result at second then ", r))
  .catch((err) => console.log(err));
