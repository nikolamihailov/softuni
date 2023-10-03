import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const movies = [
    {
      title: "Man of Steel",
      year: 2008,
      cast: ["Henry Cavil"],
    },
    {
      title: "Harry Potter",
      year: 2000,
      cast: ["Daniel Radclife", "Ema Watson"],
    },
    {
      title: "Avengers",
      year: 2010,
      cast: ["Thor", "Hulk"],
    },
  ];
  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
