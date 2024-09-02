import React, { useEffect, useState } from "react";

const FetchDataFromAPI = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await api.json();
      //   console.log("data is coming ", data);
      setResponse(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {response.map((data) => (
        <div key={data.id}>
          <h3>{data.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default FetchDataFromAPI;
