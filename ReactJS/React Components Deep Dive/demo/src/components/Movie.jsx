import { useEffect } from "react";
import styles from "./Movie.module.css";

const Movie = ({
  id,
  title,
  year,
  posterUrl,
  plot,
  removeMovie,
  onSelectMovie,
  selected,
}) => {
  useEffect(() => {
    console.log(
      `Movie ${title} - mounted(added to the DOM)`
    );

    return () => {
      console.log(
        `Movie ${title} - unmounted(removed to the DOM)`
      );
    };
  }, [title]);

  useEffect(() => {
    console.log(`Movie ${title} - updated`);
  }, [selected, title]);

  return (
    <article className={styles["movie-article"]}>
      <h3
        style={{
          color: selected ? "red" : "inherit",
          fontSize: selected ? "25px" : "inherit",
        }}
      >
        Title: {title}
      </h3>
      <i>Year: {year}</i>
      <div>
        <p>{plot}</p>
      </div>
      <img src={posterUrl} alt={title} />
      <button onClick={() => removeMovie(id)}>
        Delete
      </button>
      <button onClick={() => onSelectMovie(id)}>
        Select
      </button>
    </article>
  );
};

export default Movie;
