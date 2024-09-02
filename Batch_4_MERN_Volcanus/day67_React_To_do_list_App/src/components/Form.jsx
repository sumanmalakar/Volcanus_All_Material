import { useEffect, useState } from "react";

const Form = ({ setData, data, editId, seteditId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editId !== "") {
      const filteredData = data.filter((e) => e.id == editId);
      console.log(filteredData);
      setTitle(filteredData[0].title);
      setDescription(filteredData[0].description);
    }
  }, [editId]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (editId !== "") {
      const obj = { id: editId, title, description };
      setData((prevState) =>
        prevState.map((todo) =>
          todo.id === editId ? { ...todo, ...obj } : todo
        )
      );
    } else {
      const obj = { id: Math.random(), title, description };
      setData([...data, obj]);
    }

    setTitle(" ");
    setDescription(" ");
    seteditId("")
  };

  return (
    <>
      <div className="container my-5">
        <form onSubmit={submitHandler}>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-5">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-md-5">
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            {editId != "" ? (
              <div className="col-md-2 ">
                <input
                  type="submit"
                  className="form-control btn btn-primary"
                  value="Edit"
                />
              </div>
            ) : (
              <div className="col-md-2 ">
                <input
                  type="submit"
                  className="form-control btn btn-primary"
                  value="Add"
                />
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
