import "./App.css";
import Counter from "./components/Counter";
import MovieList from "./components/MovieList";
import Timer from "./components/Timer";

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
      <Timer time={0} />
      <Counter start={0} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
