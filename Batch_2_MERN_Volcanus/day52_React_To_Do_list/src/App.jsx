import React, { useState, useEffect } from "react";
import Todos from "./components/Todos";
import Form from "./components/Form";
const App = () => {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    if (reload) {
      let jsonData = JSON.stringify(data);
      localStorage.setItem("data", jsonData);
      setReload(false)
    }
  }, [data, reload]);

  useEffect(() => {
    const getDataFromLocalStorage = JSON.parse(localStorage.getItem("data"));
    if (getDataFromLocalStorage) {
      setData(getDataFromLocalStorage);
    }
  }, []);


  // Add Todo
  const addTodo = (title, description) => {
    const obj = {
      id: Math.random(),
      title,
      description,
    };
    setData([...data, obj]);
    setReload(true);
  };

  // Delete Todo
  const deleteTodo = (id) => {
    const filteredData = data.filter((d) => d.id != id);
    setData(filteredData);
    console.log(filteredData);
    // setreload(true);
    setReload(true);
  };

  // console.log("id ",id)
  return (
    <>
      {/* <button className="btn btn-primary" onClick={()=>editTodo(1)}>
        Edit
      </button> */}

      <Form
        addTodo={addTodo}
        data={data}
        setData={setData}
        id={id}
        setId={setId}
        // setreload={setreload}
        setReload={setReload}
      />
      <Todos
        data={data}
        setData={setData}
        deleteTodo={deleteTodo}
        setId={setId}
      />
    </>
  );
};

export default App;
