import React from "react";

const Todos = ({ data, deleteTodo, setId }) => {
  return (
    <>
      <div className="container text-center" style={{ width: "700px" }}>
        {data?.map((d) => (
          <div
            key={d.id}
            className="bg-dark p-3 m-3"
            style={{ borderRadius: "10px" }}
          >
            <p>{d.id}</p>
            <h3>{d.title}</h3>
            <p>{d.description}</p>
            <div className="container">
              <button
                className="btn btn-warning mx-3"
                onClick={() => setId(d.id)}
              >
                Edit
              </button>
              <button className="btn btn-info" onClick={() => deleteTodo(d.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todos;
