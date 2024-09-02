import React, { useState } from "react";

const Image = () => {
  const [url, setUrl] = useState(
    "https://cdn.pixabay.com/photo/2017/01/18/21/49/singapore-1990959_640.jpg"
  );

  const change1 = () => {
    setUrl(
      "https://cdn.pixabay.com/photo/2023/12/15/14/49/city-8450817_640.jpg"
    );
  };
  const change2 = () => {
    setUrl(
      "https://cdn.pixabay.com/photo/2020/03/12/07/55/city-4924252_640.jpg"
    );
  };
  return (
    <div>
      <img src={url} alt="" />
      <button onClick={change1}>Change 1</button>
      <button onClick={change2}>Change 2</button>
    </div>
  );
};

export default Image;
