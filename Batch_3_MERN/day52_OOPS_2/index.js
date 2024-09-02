const product = [
  {
    title: "Iphone",
    price: 90000,
    category: "mobiles",
    imgSrc: "https://m.media-amazon.com/images/I/71v2jVh6nIL._AC_UY218_.jpg",
  },
  {
    title: "Oneplus",
    price: 30000,
    category: "mobiles",
    imgSrc: "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY218_.jpg",
  },
  {
    title: "hp probook",
    price: 70000,
    category: "laptops",
    imgSrc: "https://m.media-amazon.com/images/I/71GtopSHW-L._AC_UY218_.jpg",
  },
  {
    title: "lenovo yoga",
    price: 75000,
    category: "laptops",
    imgSrc: "https://m.media-amazon.com/images/I/71ysqV1kFxL._AC_UY218_.jpg",
  },
  {
    title: "ipad",
    price: 20000,
    category: "tablets",
    imgSrc: "https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UY218_.jpg",
  },
  {
    title: "samsung",
    price: 15000,
    category: "tablets",
    imgSrc: "https://m.media-amazon.com/images/I/91L9EF-OEGL._AC_UY218_.jpg",
  },
];

const div = document.querySelector("#product");

div.innerHTML = product.map(
  (data) => `<div style="text-align:center">
<img src=${data.imgSrc} alt="img" />
<h2>${data.title}</h2> 
 <button>${data.price}</button> 
 </div>
 `
);

document.querySelector("#mobiles").addEventListener("click", () => {
  const filteredData = product.filter((data) => data.category == "mobiles");
  div.innerHTML = filteredData.map(
    (data) => `<div style="text-align:center">
<img src=${data.imgSrc} alt="img" />
<h2>${data.title}</h2> 
 <button>${data.price}</button> 
 </div>
 `
  );
});

let inputTag = document.querySelector("#i")
const inputValue = () => {
  let input = inputTag.value;

  const filteredData = product.filter((data) => data.title.toLowerCase().includes(input.toLowerCase()));
  div.innerHTML = filteredData.map(
    (data) => `<div style="text-align:center">
<img src=${data.imgSrc} alt="img" />
<h2>${data.title}</h2> 
 <button>${data.price}</button> 
 </div>
 `
  );

  inputTag.value = ""
};
