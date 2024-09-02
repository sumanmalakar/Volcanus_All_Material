import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FetchDataFromAPI = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await api.json();

      console.log("API Data = ", data);
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {users.map((items) => (
        <div
          key={items.id}
          style={{
            textAlign: "center",
            backgroundColor: "grey",
            padding: "10px",
            margin: "10px",
          }}
          onClick={()=>navigate('/product')}
        >
          <h1>name :- {items.name}</h1>
          <h3>username:- {items.username}</h3>
          <h2>Email:- {items.email}</h2>
          <p>address :- {items.address.city}</p>
          <p>lat: -{items.address.geo.lat} </p>
          <p>lng: -{items.address.geo.lng} </p>
        </div>
      ))}
    </div>
  );
};

export default FetchDataFromAPI;
