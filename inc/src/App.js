import { useState, useEffect } from 'react'
import './App.css';
import Musician from "./components/Musician"
import logo from "./logo.svg"
import * as Tone from "tone"
import { ToneAudioBuffer } from 'tone';
function App() {

  const [myMusician, setMyMusician] = useState({ name: "nobody" })
  useEffect(() => {

  }, [])

  const startToneJs = () => {
    Tone.start()
  }

  //TODO debouncing
  //TODO add better instruments and transposition
  return (
    <div className="App">
      <Musician name="tina" synth={new Tone.Synth().toDestination()}></Musician>
      <Musician name="gina" synth={new Tone.PolySynth().toDestination()}></Musician>
      <Musician name="mina" synth={new Tone.DuoSynth().toDestination()}></Musician>
      <Musician name="lina" synth={new Tone.FMSynth().toDestination()}></Musician>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code onClick={() => startToneJs()}>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
