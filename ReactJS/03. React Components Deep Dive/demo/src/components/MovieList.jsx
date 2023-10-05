import Movie from "./Movie";

const MovieList = ({
  movies,
  removeMovie,
  onSelectMovie,
}) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Movie
            {...movie}
            removeMovie={removeMovie}
            onSelectMovie={onSelectMovie}
          />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
