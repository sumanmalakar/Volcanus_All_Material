import React from "react";

const Map = () => {
  const arr = [
    { id: 1, title: "iphone - 14", price: 100, category:"mobiles" },
    { id: 2, title: "galaxy ultra s23", price: 900, category:"laptop" },
    { id: 3, title: "sony xperia", price: 600, category:"mobiles" },
    { id: 4, title: "xioami - 14", price: 800, category:"laptop" },
  ];

  // Filter
  const filteredData = arr.filter((data)=>data.category == "laptop")
  return (
    <div>
      {filteredData.map((data) => (
        <div key={data.id}>
          <ul>
            <li>{data.title} </li> 
            <p>{data.price}</p>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Map;
