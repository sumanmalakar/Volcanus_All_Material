import React, { useEffect, useState } from "react";

const Form = ({ addTodo, id, setId, data, setData, setReload }) => {
  // console.log("edited id ", id);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // console.log(title, description);

  useEffect(() => {
    const editedData = data.filter((d) => d.id == id);
    //  console.log("data from useEffect ",editedData)
    setTitle(editedData[0]?.title);
    setDescription(editedData[0]?.description);
    // setId("");
  }, [id]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (id) {
      // update logic here
      const obj = {
        title,
        description,
      };
      setData((prevState) =>
        prevState.map((data) => (data.id === id ? { ...data, ...obj } : data))
      );
      setTitle("");
      setDescription("");
      setId("");
    } else {
      if (title == "" || description == "") {
        alert("Please fill the title and description");
      } else {
        addTodo(title, description);
        // alert("Data Added successfully..!");
        setTitle("");
        setDescription("");
      }
    }
    
    setReload(true);
  };
  return (
    <>
      <div className="container p-3">
        <form
          className="row d-flex justify-content-center align-items-center p-3"
          onSubmit={onSubmitHandler}
        >
          <div className="mb-3 col-md-5">
            <input
              value={title}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setTitle(e.target.value)}
              // required
            />
          </div>
          <div className="mb-3 col-md-5">
            <input
              value={description}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setDescription(e.target.value)}
              // required
            />
          </div>
          <div className="mb-3 col-md-2">
            {id ? (
              <button className="btn btn-primary">Edit</button>
            ) : (
              <button className="btn btn-primary">Add</button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
