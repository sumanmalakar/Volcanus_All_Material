import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/App_Context";

function Upload() {
  const { updateUserId, setupdateUserId, url, token } = useContext(AppContext);
  // console.log("getting id from update ",updateUserId)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [users, setUsers] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:1000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // fetch User
  useEffect(() => {
    const getUserbyId = async (id) => {
      // this function is called in useEffect, please scroll above
      const api = await axios.get(
        // `${url}/user/${id}`,
        "http://localhost:1000/api/userprofile/65c7835725a7e1f44dc9da49",

        {
          headers: {
            "Content-Type": "application/json",
            // Auth: token,
          },
          withCredentials: true,
        }
      );
      console.log("fetching user by Id", api.data.userbyId);
      // setUsers(api.data.user);
      setUsers(api.data.userbyId);
    };
    // getUserbyId(updateUserId);
    getUserbyId(updateUserId);

    // console.log("this is my user ", users);
    setName(users?.name);
    setEmail(users?.email);
    setPassword(users?.password);
    setFile(users?.file);
    setupdateUserId("");
  }, [updateUserId, setupdateUserId, users, url, token]);

  // update user
  const handleUpdateUser = async (id) => {
    try {
      const response = await axios.put(`http://localhost:3000/users/${id}`, {
        name,
        email,
        password,
      });
      console.log(response.data);
      // fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>File Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Upload File:</label>
          <input type="text" value={file} readOnly />
          <input type="file" onChange={handleFileChange} />
          {/* <input type="file" onChange={handleFileChange} /> */}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Upload;
