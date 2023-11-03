import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const URL = "https://swapi.dev/api/people";

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);

  return (
    <div>
      <h1>Star Wars Characters</h1>
      {characters.map((c, idx) => (
        <Link to={`/characters/${idx + 1}`} key={idx + 1}>
          <p> {c.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default CharactersList;
