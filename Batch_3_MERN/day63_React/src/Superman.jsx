import React from 'react'

const Superman = ({ superman,ram }) => {
    
   
  return (
    <div>
      Superman = {superman}
      <br />
      <button onClick={()=>ram("ram","Ayodha")}>ChangeName</button>
    </div>
  );
};

export default Superman