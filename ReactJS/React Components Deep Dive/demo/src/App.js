import { useState } from "react";
import MovieList from "./components/MovieList";
import { movies as movieData } from "./movies";

function App() {

  const [movies, setMovies] = useState(movieData);

  const removeMovie = (id) => {
    setMovies(oldMovies => oldMovies.filter(m => m.id !== id));
  };
  return (
    <div >
      <h2>Movie Collection</h2>
      <MovieList movies={movies.slice(0, 3)} removeMovie={removeMovie} />
    </div>
  );
}

export default App;
