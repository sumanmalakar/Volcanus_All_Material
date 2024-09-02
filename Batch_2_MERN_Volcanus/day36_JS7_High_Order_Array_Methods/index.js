// const arr = [10,20,30,40,50];

// console.log(arr.includes(21));

// const phones = ["apple","lenovo","dell inspiron","xiaomi","hp","oppo"]
// const searchElement = "Apple";
// console.log(phones.includes(searchElement.toLowerCase()));

// High Order Array Methods

// Map method
// const arr = [10, 20, 30, 40, 50, 60];

// const result = arr.map((e) => {
//   console.log(e + 10);
//   return e;
// });

// console.log(result);

// filter method

// const arr = [10,20,30,40,50,60];

// const filteredData = arr.filter((data)=>data<30)

// console.log(filteredData)

const products = [
  {
    id: 1,
    title: "Iphone 14",
    category: "Mobiles",
    price: 69999,
  },
  {
    id: 2,
    title: "oneplus 12",
    category: "mobiles",
    price: 29999,
  },
  {
    id: 3,
    title: "hp probook g90",
    category: "laptops",
    price: 169999,
  },
  {
    id: 4,
    title: "lenovo yoga",
    category: "laptops",
    price: 269999,
  },
  {
    id: 5,
    title: "microsoft surface",
    category: "tablets",
    price: 89999,
  },
  {
    id: 6,
    title: "ipad",
    category: "tablets",
    price: 99999,
  },
];
// const filterSearch = "Mobiles"

// const filtereByCategory = products.filter((product)=>product.category.toLowerCase() == filterSearch.toLowerCase())

// console.log(filtereByCategory);

// const filterByPrice = products.filter((data)=>data.price >=99999)

// console.log(filterByPrice)

const filterByTitle = products.filter((data)=>data.title.toLowerCase().includes("o"))

console.log(filterByTitle)