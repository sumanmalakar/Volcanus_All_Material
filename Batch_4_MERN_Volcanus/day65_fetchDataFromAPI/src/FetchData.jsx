import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await api.json();

      console.log(data);
      setApiData(data);
    };
    fetchDataFromAPI();
  }, []);

  return (
    <div>
      {apiData.map((data) => (
        <div
          key={data.id}
          style={{
            textAlign: "center",
            backgroundColor: "green",
            margin: "15px",
            padding: "10px",
            borderRadius: "10px",
            border: "2px solid blue",
          }}
        >
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchData;
