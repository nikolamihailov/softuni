import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies.json")
      .then(res => res.json())
      .then(data => setMovies(data.movies));
  }, []);

  const removeMovie = (id) => {
    setMovies(oldMovies => oldMovies.filter(m => m.id !== id));
  };

  const onSelectMovie = (id) => {
    setMovies(oldMovies => oldMovies.map(m => ({ ...m, selected: m.id === id })));
  };

  return (
    <div >
      <h2>Movie Collection</h2>
      <MovieList movies={movies.slice(0, 3)} removeMovie={removeMovie} onSelectMovie={onSelectMovie} />
    </div>
  );
}

export default App;
