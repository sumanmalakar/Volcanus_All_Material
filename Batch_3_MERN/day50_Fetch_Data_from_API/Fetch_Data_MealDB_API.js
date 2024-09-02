// https://www.themealdb.com/api/json/v1/1/filter.php?a=american

const fetchData = async () => {
  const api = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=canadian"
  );
  const data = await api.json();
  console.log(data.meals);

  const div = document.querySelector("#mealdata");

  div.innerHTML = data.meals.map(
    (d) => `<div>
  <img class="img" src=${d.strMealThumb} style="width:150px" />
  </div>`
  );
};

fetchData();
