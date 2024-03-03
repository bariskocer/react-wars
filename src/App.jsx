// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch , NavLink} from "react-router-dom";
import CharacterList from "./components/CharacterList/CharacterList";
import PlanetDetailPage from "./pages/PlanetDetailPage";
import "./App.css";
import HomePage from "./pages/HomePage";
import FilmList from "./components/FilmList/FL";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router >
      <Header/>
      <Switch>
        <Route path="/characters" component={CharacterList} />
        <Route path="/films" component={FilmList} />

        <Route path="/planets/:id" component={PlanetDetailPage} />
      </Switch>
    </Router>
  );
}

export default App;
