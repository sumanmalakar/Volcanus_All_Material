import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await api.json();
      setdata(data);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((d) => (
        <div key={d.id}>
          <h1>{d.userId}</h1>
          <p>{d.title}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchData;
