import React, { useEffect,useState } from "react";

const MealDb = () => {
    const [mealData, setMealData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
        const api = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await api.json()
        setMealData(data.categories);
        console.log(data)
    };
    fetchData();
  }, []);

  return (
    <div>
      {mealData.map((item) => (
        <div key={item.idCategory}>
          <h1>{item.strCategory}</h1>
          <img src={item.strCategoryThumb} alt="" />
        </div>
      ))}
    </div>
  );
};

export default MealDb;
