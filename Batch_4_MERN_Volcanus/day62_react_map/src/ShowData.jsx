import React from "react";
const ShowData = () => {
  const movies = [
    { id: 1, movieName: "Ra.One", release: 2012, actor: "SRK" },
    { id: 2, movieName: "Infinity War", release: 2018, actor: "RDJ" },
    { id: 3, movieName: "Man of Steel", release: "2010", actor: "Henry" },
    { id: 4, movieName: "Badshaah", release: "1996", actor: "SRK" },
  ];
  return (
    <div>
      {movies.map((data) => (
        <div
          key={Math.random()}
          style={{
            backgroundColor: "gray",
            textAlign: "center",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h1>{data.movieName}</h1>
          <h2>{data.actor}</h2>
          <h3>{data.release}</h3>
        </div>
      ))}
    </div>
  );
};

export default ShowData;
