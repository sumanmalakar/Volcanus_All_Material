import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([
    { id: 1, hero: "superman" },
    { id: 2, hero: "spiderman" },
  ]);

  const [inputData, setInputData] = useState("");

  const [id, setId] = useState("");

  useEffect(() => {
    const temp = data.filter((item) => item.id == id);
    // console.log(temp[0]?.hero);
    setInputData(temp[0]?.hero);
  }, [id]);

  const AddHero = (e) => {
    e.preventDefault();

    if (id != "") {
      const temp = data.filter((item) => item.id == id);

      setInputData(temp[0].hero);

      let newArray = data;

      for (let i = 0; i < newArray.length; i++) {
        if (newArray[i].id == temp[0].id) {
          (newArray[i].id = temp[0].id), (newArray[i].hero = inputData);
        }
      }

      setData(newArray);
      setInputData("");
    } else {
      const obj = {
        id: Math.random(),
        hero: inputData,
      };
      setData([...data, obj]);
      setInputData("");
    }
    setId("");
  };

  const deleteHero = (id) => {
    setData(data.filter((item) => item.id != id));
  };

  return (
    <>
      <form
        onSubmit={AddHero}
        style={{
          backgroundColor: "blue",
          textAlign: "center",
          padding: "10px",
          margin: "20px",
        }}
      >
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />

        {id != "" ? (
          <input type="submit" value="Edit" />
        ) : (
          <input type="submit" value="Add" />
        )}
      </form>

      {/* <h1>Edit ke liye id = {id}</h1> */}

      {data.map((item) => (
        <div
          key={item.id}
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h1>{item.hero}</h1>
          <p>{item.id}</p>
          <button onClick={() => setId(item.id)}>Edit</button>
          <button onClick={() => deleteHero(item.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default App;
