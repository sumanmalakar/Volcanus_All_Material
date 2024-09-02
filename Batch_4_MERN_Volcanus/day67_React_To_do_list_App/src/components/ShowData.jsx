import React from "react";

const ShowData = ({ data, deleteItem, seteditId }) => {
  return (
    <div style={{ width: "650px", margin: "auto" }}>
      {data?.map((e) => (
        <div
          key={e.id}
          className="bg-dark text-center my-5 p-3"
          style={{ borderRadius: "10px", border: "2px solid yellow" }}
        >
          <h2>{e.id}</h2>
          <h3>{e.title}</h3>
          <p>{e.description}</p>
          <button className="btn btn-primary mx-3" onClick={()=>seteditId(e.id)}>Edit</button>
          <button
            className="btn btn-danger mx-3"
            onClick={() => deleteItem(e.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowData;
