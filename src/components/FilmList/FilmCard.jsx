import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPlanet } from "../../utils/api";

const FilmCard = ({ film }) => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchAllPlanets = async () => {

      const planetsData = await Promise.all(
        film.planets.map((planetUrl) => fetchPlanet(planetUrl))
      );
      setPlanets(planetsData);
    };

    fetchAllPlanets();
  }, [film.planets]);

  return (
    <div>
      <h2>{film.title}</h2>
      <p>Director: {film.director}</p>
      <p>Release Date: {film.release_date}</p>
      <div>
        <h3>Planets</h3>
        <ul>
          {planets.map((planet, index) => {
            const planetId = planet.url.split("/").slice(-2, -1)[0];
            return (
              <li key={index}>
                <Link to={`/planets/${planetId}`}>{planet.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FilmCard;
