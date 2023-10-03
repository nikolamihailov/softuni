const Movie = (props) => {
  return (
    <article>
      <h3>{props.title}</h3>
      <i>{props.year}</i>
      <ul>
        <li>{props.cast[0]}</li>
      </ul>
    </article>
  );
};

export default Movie;
