const products = [
  { id: 1, title: "iPhone 13", category: "Mobiles", price: 799.99 },
  { id: 2, title: "MacBook Pro", category: "Laptops", price: 1299.99 },
  { id: 3, title: "Canon EOS R5", category: "Cameras", price: 3899.99 },
  { id: 4, title: "Sony WH-1000XM4", category: "Headphones", price: 349.99 },
  { id: 5, title: "Samsung Galaxy S21", category: "Mobiles", price: 699.99 },
  { id: 6, title: "Dell XPS 13", category: "Laptops", price: 999.99 },
  { id: 7, title: "Nikon D850", category: "Cameras", price: 2999.99 },
  {
    id: 8,
    title: "Bose QuietComfort 35 II",
    category: "Headphones",
    price: 299.99,
  },
  { id: 9, title: "Google Pixel 6", category: "Mobiles", price: 599.99 },
  { id: 10, title: "HP Spectre x360", category: "Laptops", price: 1199.99 },
];

// products.map((data)=>console.log(data))

// const result = products.filter((data)=>data.category == "Mobiles")
const result = products.filter((data)=>data.price > 1500)
console.log(result)