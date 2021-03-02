import { useState, useEffect } from 'react'
import './App.css';
import Musician from "./components/Musician"
import Pit from "./components/Pit"
import Hiring from "./components/Hiring"
import logo from "./logo.svg"
import * as Tone from "tone"
import GoogleOAuth from "easy-google-oauth";


function App() {

  const [myMusician, setMyMusician] = useState({ name: "nobody" })
  useEffect(() => {

  }, [])

  const startToneJs = () => {
    Tone.start()
  }
  // const googleLoginSuccess = (res) => {
  //   console.log("GIS", res);
  // }
  // const googleLoginFailure = (res) => {
  //   console.log("GIF", res);
  // }
  // const googleLogoutSuccess = () => {
  //   console.log('GOS')
  // }
  // const googleLogoutFailure = () => {
  //   console.log('GOG');
  // }


  // const theInas = [
  //   {
  //     name: 'tina',
  //     synth: Tone.Synth(),
  //     tasnpose: 0
  //   },
  //   {
  //     name: 'gina',
  //     synth: Tone.PolySynth(),
  //     tasnpose: -24
  //   },
  //   {
  //     name: 'mina',
  //     synth: Tone.DuoSynth(),
  //     tasnpose: 12
  //   },
  //   {
  //     name: 'lina',
  //     synth: Tone.FMSynth(),
  //     tasnpose: -12
  //   }
  // ]


  //TODO debouncing
  //TODO add better instruments and transposition
  return (
    <div className="App">
      <Pit></Pit>
      <Hiring></Hiring>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          press <code onClick={() => startToneJs()}>HERE!</code> to start Tone.js
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <GoogleOAuth
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          expirationHourMultiplier={1}
          googleLoginSuccess={googleLoginSuccess}
          googleLoginFailure={googleLoginFailure}
          googleLogoutSuccess={googleLogoutSuccess}
          googleLogoutFailure={googleLogoutFailure}
        /> */}
      </header>
    </div>
  );
}

export default App;
