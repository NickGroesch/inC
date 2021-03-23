import { useState, useEffect } from 'react'
import '../App.css';
import Musician from "../components/Musician"
import Pit from "../components/Pit"
import Hiring from "../components/Hiring"
import * as Tone from "tone"
// import GoogleOAuth from "easy-google-oauth";


function Application() {

  const [orchestra, setOrchestra] = useState([{ name: "nobody", synth: "AMSynth", gain: .08, transpose: 0 }])

  const startToneJs = () => {
    Tone.start()
  }
  const makeNoob = noob => {
    console.log('making noob in stateful container')
    setOrchestra([...orchestra, noob])
  }
  return (
    <div className="App">
      <p>
        press <code onClick={() => startToneJs()}>HERE!</code> to start Tone.js
        </p>
      <Pit players={orchestra}></Pit>
      <Hiring makeNoob={makeNoob} ></Hiring>


    </div>
  );
}

export default Application;
