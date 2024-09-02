import React from "react";

const ShowData = ({ data }) => {
  return (
    <div>
      {data.map((d) => (
        <div key={d.id}>
          <h1>{d.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default ShowData;
