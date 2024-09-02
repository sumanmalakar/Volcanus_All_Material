import React, { useState } from "react";
const FormHandling = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name2, setname2] = useState("")

  const [flag, setflag] = useState(false)
  // console.log(name,email,password)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    // backend logic here
    alert("You form has been submited..!");
    console.log(`name = ${name} \n email=${email} \n password = ${password}`);
    setflag(true)
    setname2(name)
    setName("")
    setEmail("")
    setPassword("")
  };

  return (
    <>
      <form className="container" onSubmit={onSubmitHandler} >
        <h1>Form Handling</h1>
        Name :-
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        Gmail :-{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        Password :-{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button className="btn btn-warning">Submit</button>
      </form>
      {flag && (
        <>
        <h1>Name = {name2}</h1>
        <h2>Email = {email}</h2>
        <h2>Password = {password}</h2>
        </>
      )}

    </>
  );
};

export default FormHandling;
