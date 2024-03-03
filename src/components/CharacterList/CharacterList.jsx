import React, { useState, useEffect } from "react";
import { fetchCharacters } from "../../utils/api";
import CharacterCard from "./CharacterCard";
import SearchBar from "../SearchBar/SearchBar";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://swapi.dev/api/people"
  );
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPrevPageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getCharacters = async () => {
    try {
      const data = await fetchCharacters(currentPageUrl);
      setCharacters(data.results);
      setNextPageUrl(data.next);
      setPrevPageUrl(data.previous);
      setIsLoading(false);
    } catch (error) {
      console.error("error", error);
      setIsLoading(false);
    }
  };

  const handleSearch =(e)=> {
    const {value} = e.target
    setSearchTerm(value)
  }

  const filteredCharacters = characters.filter((character) =>
  character.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  useEffect(() => {
    getCharacters();
  }, [currentPageUrl]);

  return (
  <div>
    {
        isLoading ? (<p>Loading Characters...</p>)
        :(
            
            <div>
              <div>
              <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
              </div>
                <div>
                    {prevPageUrl && <button onClick={()=>{setCurrentPageUrl(prevPageUrl)}}>Previous</button>}
                    {nextPageUrl && <button onClick={()=> {setCurrentPageUrl(nextPageUrl)}}>Next</button>}
                </div>
                
                <div>
                    {
                        filteredCharacters.map((character) => (
                            <CharacterCard key = {character.name} character = {character} />
                        ))
                    }
                </div>
                
            </div>
        )
    }
  </div>
  )
};

export default CharacterList;
