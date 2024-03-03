// src/components/CharacterList/CharacterCard.js

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { fetchPlanet } from "../../utils/api";

const CharacterCard = ({ character }) => {
  const [homeworld, setHomeworld] = useState("");
  const [planetId, setPlanetId] = useState("");

  useEffect(() => {
    const getHomeworld = async () => {
      const planet = await fetchPlanet(character.homeworld);
      setHomeworld(planet.name);
      const splitUrl = character.homeworld.split("/");
      const planetId = splitUrl[splitUrl.length - 2]; // URL sonunda boş bir string olabilir, bu yüzden sondan ikinci elemanı alıyoruz
      setPlanetId(planetId);
    };

    getHomeworld();
  }, [character.homeworld]);

  return (
    <div>
      <h3>{character.name}</h3>
      <p>Gender: {character.gender}</p>
      <p>Birth Year: {character.birth_year}</p>
      {planetId && (
        <p>
          Homeworld: <Link to={`/planets/${planetId}`}>{homeworld}</Link>
        </p>
      )}
    </div>
  );
};

export default CharacterCard;
