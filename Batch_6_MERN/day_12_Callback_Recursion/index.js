const test = (a, callback) => {
  console.log("This is test function...",a);
  callback();
};

let demo = () => {
  console.log("This demo fuction outside the test function");
};

test(10,demo);
