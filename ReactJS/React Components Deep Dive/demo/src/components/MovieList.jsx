import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Movie {...movie} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
