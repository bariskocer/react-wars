import React,{useState,useEffect} from 'react'
import { fetchFilms } from '../../utils/api';
import FilmCard from './FilmCard';

const FilmList=()=> {
    const [films, setFilms] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState('https://swapi.dev/api/films/');
    const [prevPageUrl, setPrevPageUrl] = useState('');
    const [nextPageUrl, setNextPageUrl] = useState(''); 

    useEffect(()=> {
        const getFilms =async()=> {
            const data = await fetchFilms(currentPageUrl);
            setFilms(data.results);
            setPrevPageUrl(data.previous);
            setNextPageUrl(data.next);
        }
        getFilms();
    },[currentPageUrl])

  return (
    <div>
      <div>
        {prevPageUrl && <button onClick={()=>{setCurrentPageUrl(prevPageUrl)}}>Previous</button>}
        {nextPageUrl && <button onClick={()=>{setCurrentPageUrl(nextPageUrl)}}>Next</button>}
      </div>
      <div>
        {
            films.map(film => (
                <FilmCard key ={film.episode_id} film ={film}/>
            ))
        }
      </div>
    </div>
  )
}

export default FilmList
