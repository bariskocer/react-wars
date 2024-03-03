import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const HomePage=()=> {
  return (
    <div>
      <button><Link to="/characters">Characters</Link></button>
      <button><Link to="/films">Films</Link></button>
    </div>
  )
}

export default HomePage
