import React, { useState } from "react";

const Form = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(
      "Your form has been submitted...!" +
        name +
        " " +
        email +
        " " +
        phone +
        " " +
        password
    );
    console.log("form data ", name, email, phone, password);
    setemail("");
    setname("");
    setpassword("");
    setphone("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        Name :-{" "}
        <input
          onChange={(e) => setname(e.target.value)}
          value={name}
          type="text"
        />
        {/* <h1>{name}</h1> */}
        <br />
        <br />
        Email :-{" "}
        <input
          onChange={(e) => setemail(e.target.value)}
          value={email}
          type="email"
        />
        <br />
        <br />
        phone :-{" "}
        <input
          onChange={(e) => setphone(e.target.value)}
          value={phone}
          type="number"
        />
        <br />
        <br />
        Password :-{" "}
        <input
          onChange={(e) => setpassword(e.target.value)}
          value={password}
          type="password"
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
