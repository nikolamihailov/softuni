import Movie from "./Movie";

const MovieList = ({ movies, removeMovie }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Movie {...movie} removeMovie={removeMovie} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
