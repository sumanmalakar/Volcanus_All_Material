import { useEffect, useState } from "react";
import ShowData from "./ShowData";
const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const FetchData = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await api.json();
      setData(data)
      // console.log(data);
    };
    FetchData();
  }, []);
  console.log("state wala data = ",data)
  return (
    <>
      <h1>Fetching data From API</h1>
      <ShowData data={data} />
    </>
  );
};

export default App;
