import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import { fetchPlanet } from '../utils/api';

const PlanetDetailPage =()=> {
    const {id} = useParams();
    const [planet, setPlanet] = useState({});


    useEffect(()=> {
        const getPlanetDetails = async ()=> {
            const data = await fetchPlanet(`https://swapi.dev/api/planets/${id}`)
            setPlanet(data);
        }
        getPlanetDetails()
    },[id])

  return (
    <div>
      <h2>{planet.name}</h2>
      <h3>Population: {planet.population}</h3>
      <h3>Climate: {planet.climate}</h3>
      <h3>Gravity: {planet.gravity}</h3>
      <h3>Terrain: {planet.terrain}</h3>
    </div>
  )
}

export default PlanetDetailPage
