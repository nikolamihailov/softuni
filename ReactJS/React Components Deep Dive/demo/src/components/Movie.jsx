const Movie = ({ title, year, posterUrl, plot }) => {
  return (
    <article>
      <h3>Title: {title}</h3>
      <i>Year: {year}</i>
      <div>
        <p>{plot}</p>
      </div>
      <img src={posterUrl} alt={title} />
    </article>
  );
};

export default Movie;
