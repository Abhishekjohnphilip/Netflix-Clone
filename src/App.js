import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import {Originals,Action, ComedyMovies, Trending, HorrorMovies, RomanceMovies, Documentaries, Popular, Series } from'./urls'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Banner/>
      <RowPost url={Originals} title='NetFlix Originals'/>
      <RowPost url={Trending} title='Trending' isSmall/>
      <RowPost url={Popular} title='Popular' isSmall/>
      <RowPost url={Series} title='TV Series' isSmall/>
      <RowPost url={Action} title='Action' isSmall/>
      <RowPost url={ComedyMovies} title='Comedy' isSmall/>
      <RowPost url={HorrorMovies} title='Horror' isSmall/>
      <RowPost url={RomanceMovies} title='Romance' isSmall/>
      <RowPost url={Documentaries} title='Documentaries' isSmall/>
    
      
    </div>
  );
}

export default App;
