// console.log("Hello console");

// synchronus code
const synchronus = () => {
  console.log("Superman");
  console.log("Spiderman");
  console.log("Batman");
};

// asynchronus code
const asynchronus = () => {
  console.log("Anurag bhai zindabaad");
  setTimeout(() => {
    console.log("Vellore Institute of Technology");
  }, 2000);
  console.log("Volcanus");
};

// calling function synchronus
// synchronus();

// calling function asynchronus
// asynchronus()

//  javascript is dynamic typed language

// fetch data using async await

const fetchData = async () => {
  const api = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await api.json();
  console.log(data);
};

// fetchData();

const fetchMealData = async () => {
  const api = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=american"
  );
  const data = await api.json();
  return data.meals;
  // console.log(data)
};
// console.log(fetchMealData())

const showDataToDOM = async () => {
  const data = await fetchMealData();
  console.log("This data is coming from mealDB API ", data);

  //   document.querySelector(".main").innerHTML = `
  // <div>
  // <h1>${data[0].strMeal}</h1>
  // <img src=${data[0].strMealThumb} alt=${data[0].strMeal} style="width:300px;" />
  // </div>
  //  `;

  document.querySelector(".main").innerHTML = data.map(
    (d) => `
<div> 
<img src=${d.strMealThumb} alt=${d.strMeal} style="width:300px;" />
<h1>${d.strMeal}  ${d.idMeal}</h1> 
 </div>`
  );
};

showDataToDOM();
