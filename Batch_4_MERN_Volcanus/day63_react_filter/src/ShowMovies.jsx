import React from "react";
import { movies } from "./data";

const ShowMovies = ({ movieData, setMovieData }) => {

  const filterByCategory = (category) => {
    const newMovies = movies.filter((data) => data.category == category);
    console.log(newMovies);
    setMovieData(newMovies)
  };
  
  return (
    <>
      <div style={{ textAlign: "center", padding: "10px" }}>
        <button onClick={() => filterByCategory("Science Fiction")}>
          Science Fiction
        </button>
        <button onClick={() => filterByCategory("Drama")}>Drama</button>
        <button onClick={() => filterByCategory("Crime")}>Crime</button>
        <button onClick={() => filterByCategory("Action")}>Action</button>
        <button onClick={() => filterByCategory("Fantasy")}>Fantasy</button>
      </div>
      <div>
        {movieData?.map((data) => (
          <div
            key={data.id}
            style={{
              backgroundColor: "blueviolet",
              textAlign: "center",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h1>{data.category}</h1>
            <h3>{data.moviename}</h3>
            <p>{data.description}</p>
            <h3>{data.releasedate}</h3>
            <h3>{data.imdbrating}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowMovies;
