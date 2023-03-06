import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faBook } from "@fortawesome/free-solid-svg-icons";

import Player from "./components/Player";
import Song from "./components/Song";

function App() {
  return (
    <div className="App">
      <h1>Music Player</h1>
      <Player></Player>
      <Song></Song>
    </div>
  );
}

export default App;
