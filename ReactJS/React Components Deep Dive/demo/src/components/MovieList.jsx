import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((m) => (
        <Movie
          title={m.title}
          year={m.year}
          posterUrl={m.posterUrl}
        />
      ))}
    </div>
  );
};

export default MovieList;
