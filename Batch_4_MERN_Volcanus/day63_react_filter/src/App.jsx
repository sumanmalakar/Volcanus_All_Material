import React, { useState } from "react";
import ShowMovies from "./ShowMovies";
import { movies } from "./data";

const App = () => {
  const [movieData, setMovieData] = useState(movies);

  return (
    <div>
      <ShowMovies movieData={movieData} setMovieData={setMovieData} />
    </div>
  );
};

export default App;
