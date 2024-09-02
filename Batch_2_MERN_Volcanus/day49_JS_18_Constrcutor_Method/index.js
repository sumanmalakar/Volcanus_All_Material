// console.log("Hello Console")

// const heros = {
//   name: "superman",
//   age: 400,
//   salary: 789064,
//   cart: { productName: "iphone", price: 1223444, quentity: 1 },
//   anuraag: function () {
//     return this;
//   },
// };
// console.log(this);
// console.log(heros);

// case of promise 

// const P = new Promise()

// // case date

// const date = new Date();

// Constructor function
function Product(name, price, quentity){
    this.name = name,
    this.price = price
    return this
}
// console.log(Product('macbook',1234567,2))

const p1 = new Product("macbook", 1234567, 2);
const p2 = new Product("hp i - book", 749, 3);
Product.prototype.brandName = "Apple";
Product.prototype.quentity = 20;
Product.prototype.price = 30;
Product.prototype.shell = function () {
  return 20;
};

console.log(p1.brandName,p1.price)
console.log(p1.shell())
// console.log(p2)
console.log(p1)

