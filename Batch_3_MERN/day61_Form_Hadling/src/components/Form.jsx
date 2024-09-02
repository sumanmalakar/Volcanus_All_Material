import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   console.log(name);

const onSubmitHandler = (e) =>{
    e.preventDefault();
    alert("name = "+name+"\n email = "+email+" \n password = "+password)

    setName("")
    setEmail("")
    setPassword("")

    
}

  return (
    <>
      <h1>Form Handling</h1>
      <form onSubmit={onSubmitHandler}>
        name:{" "}
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
        />
        <br />
        <br />
        email:{" "}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
        />
        <br />
        <br />
        password:{" "}
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
