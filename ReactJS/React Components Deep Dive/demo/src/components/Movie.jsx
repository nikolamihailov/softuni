const Movie = ({
  id,
  title,
  year,
  posterUrl,
  plot,
  removeMovie,
}) => {
  return (
    <article>
      <h3>Title: {title}</h3>
      <i>Year: {year}</i>
      <div>
        <p>{plot}</p>
      </div>
      <img src={posterUrl} alt={title} />
      <button onClick={() => removeMovie(id)}>
        Delete
      </button>
    </article>
  );
};

export default Movie;
