import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <Movie {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
