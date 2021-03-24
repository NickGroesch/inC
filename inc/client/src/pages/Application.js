import { useState, useEffect } from 'react'
import '../App.css';
import { start } from "tone"

// import Musician from "../components/Musician"
import Pit from "../components/Pit"
import Hiring from "../components/Hiring"
import TheHelm from "../components/TheHelm"


function Application() {

  const [orchestra, setOrchestra] = useState([{ name: "nobody", synth: "AMSynth", gain: .08, transpose: 0, index: "y" }])
  const [started, setStarted] = useState(false)

  const startToneJs = () => {
    start()
  }
  const makeMusician = newPlayer => {
    console.log('making newPlayer in stateful container')
    setOrchestra([...orchestra, newPlayer])
  }
  return (
    <div className="App">
      <TheHelm />
      <p>
        press <code onClick={() => startToneJs()}>HERE!</code> to start Tone.js
        </p>
      <Pit players={orchestra}></Pit>
      <Hiring makeMusician={makeMusician} ></Hiring>


    </div>
  );
}

export default Application;
