import React, { useEffect, useState } from "react";

const FetchDataFromAPI = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
      );
      const data = await api.json();
        console.log("data is coming ", data);
      setResponse(data.meals);
    };

    fetchData();
  }, []);

  return (
    <div>
      {response.map((data) => (
        <div key={data.id}>
          {/* <h3>{data.title}</h3> */}
          <img src={data.strMealThumb} alt="" />
        </div>
      ))}
      {/* <h1>Data</h1> */}
    </div>
  );
};

export default FetchDataFromAPI;
