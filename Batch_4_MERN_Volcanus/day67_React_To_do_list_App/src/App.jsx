import React, { useState } from "react";
import ShowData from "./components/ShowData";
import Form from "./components/Form";

const App = () => {
  const [data, setData] = useState([
    { id: 1, title: "Superman", description: "WonderFull Hero" },
    { id: 2, title: "Spiderman", description: "WonderFull Hero 2" },
  ]);

  const [editId, seteditId] = useState("");

  console.log("edit ke liye id = ", editId);

  const deleteItem = (id) => {
    setData(data.filter((e) => e.id != id));
  };

  return (
    <>
      <Form
        setData={setData}
        data={data}
        editId={editId}
        seteditId={seteditId}
      />
      <ShowData data={data} deleteItem={deleteItem} seteditId={seteditId} />
    </>
  );
};

export default App;
