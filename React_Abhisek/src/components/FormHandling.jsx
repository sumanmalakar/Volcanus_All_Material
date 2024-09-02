import React, { useState } from "react";

const FormHandling = ({ flag, setflag }) => {
  const [hero, setHero] = useState("");
  const [movie, setMovie] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    alert("Your form has been submitted");
    alert("Hero Name " + hero);
    alert("Movie Name " + movie);

    setflag(true);
    // setHero("")
    // setMovie("")
  };
  return (
    <>
      <h1>Form Handling</h1>

      <form onSubmit={submitHandler}>
        Hero:-{" "}
        <input
          value={hero}
          type="text"
          onChange={(e) => setHero(e.target.value)}
        />
        <br />
        <br />
        Movie:-{" "}
        <input
          value={movie}
          type="text"
          onChange={(e) => setMovie(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
      {flag && (
        <>
          <h1>hero:- {hero}</h1>
          <h1>movie:- {movie}</h1>
        </>
      )}
    </>
  );
};

export default FormHandling;
