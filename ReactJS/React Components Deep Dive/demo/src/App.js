import MovieList from "./components/MovieList";
import { movies } from "./movies";

function App() {
  return (
    <div >
      <h2>Movie Collection</h2>
      <MovieList movies={movies.slice(0, 3)} />
    </div>
  );
}

export default App;
