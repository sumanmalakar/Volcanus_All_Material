import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const Panchayat = () => {
  const { dollar, data,setData } = useContext(AppContext);
  console.log("This data is comming from Context ",data)
  return (
    <>
      <h1>{dollar}</h1>
      <h1>{data}</h1>
      <button onClick={()=>setData(data+1)}>Increase</button>
    </>
  );
};

export default Panchayat;
