import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const URL = "https://swapi.dev/api/people";

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`${URL}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
      });
  }, []);
  return (
    <div>
      <h2>Name: {character?.name}</h2>
      <p>Weight: {character?.mass} kg.</p>
      <p>Height: {character?.height} cm.</p>
    </div>
  );
};
export default Character;
