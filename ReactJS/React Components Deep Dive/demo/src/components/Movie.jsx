const Movie = ({ title, year, posterUrl }) => {
  return (
    <article>
      <h3>Title: {title}</h3>
      <i>Year: {year}</i>
      <img src={posterUrl} alt={title} />
    </article>
  );
};

export default Movie;
