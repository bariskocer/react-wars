import React, { useState, useEffect } from "react";
import { fetchFilms } from "../../utils/api";
import FilmCard from "./FilmCard";
import SearchBar from "../SearchBar/SearchBar";

const FL = () => {
  const [films, setFilms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://swapi.dev/api/films/"
  );
  const [prevPageUrl, setPrevPageUrl] = useState("");
  const [nextPageUrl, setNextPageUrl] = useState("");

  const getFilms = async () => {
    const filmsData = await fetchFilms();
    setFilms(filmsData.results);
    setPrevPageUrl(filmsData.previous);
    setNextPageUrl(filmsData.next);
  };

  useEffect(() => {
    getFilms();
  }, [currentPageUrl]);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <div>
        {filteredFilms.map((film) => (
          <FilmCard key={film.episode_id} film={film} />
        ))}
      </div>
      <div>
      {prevPageUrl && <button onClick={()=> {setCurrentPageUrl(prevPageUrl)}}>Previous</button>}
      {nextPageUrl && <button onClick={()=> {setCurrentPageUrl(nextPageUrl)}}>Previous</button>}
      </div>
    </div>
  );
};

export default FL;
