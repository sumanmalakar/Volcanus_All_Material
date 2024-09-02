import React, { useEffect, useState } from "react";

const PixabayData = () => {
  const [apiData, setApiData] = useState([]);
  const [inputData, setInputData] = useState("paris");
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const API_KEY = "43352392-174fc6f5dd299e65ccfe8a3eb";
      const api = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=${inputData}&image_type=photo&pretty=true`
      );
      const data = await api.json();

      console.log("my pixabay api data = ", data.hits);
      setApiData(data.hits);
    };
    fetchDataFromAPI();
  }, [inputData]);

  return (
    <>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <input
        //   value={inputData}
          type="text"
          placeholder="Search Here..."
          onChange={(e) => setInputData(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {apiData.map((data) => (
          <div key={data.id} style={{ margin: "20px" }}>
            <img
              src={data.largeImageURL}
              style={{
                width: "350px",
                // border: "2px solid blue",
                borderRadius: "20px",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PixabayData;
