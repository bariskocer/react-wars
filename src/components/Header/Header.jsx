import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";


function Header() {
  return (
    <header className="app-header">
      <h1>
        <NavLink exact to="/">Star Wars Universe</NavLink>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName ="active" to="/characters">Characters</NavLink>
          </li>
          <li>
            <NavLink activeClassName ="active" to="/films">Films</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
