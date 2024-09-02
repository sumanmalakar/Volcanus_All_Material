import React, { useContext } from "react";
import { AppContext } from "../context/App_Context";
import {useNavigate} from 'react-router-dom'

const AllUsers = () => {
  const data = useContext(AppContext);
  const navigate = useNavigate()
  return (
    <div>
      <div
        className="container my-4"
        style={{ width: "700px", borderRadius: "10px" }}
      >
        {data.users.map((user) => (
          <div
            key={user._id}
            className="text-center bg-secondary p-2 my-4"
            style={{ borderRadius: "10px" }}
          >
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.createdAt}</p>
            <button className="btn btn-warning" onClick={()=>{
              data.setupdateUserId(user._id);
              navigate('/upload');
            }} >Update</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
