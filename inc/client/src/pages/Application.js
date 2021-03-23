import { useState, useEffect } from 'react'
import '../App.css';
import Musician from "../components/Musician"
import Pit from "../components/Pit"
import Hiring from "../components/Hiring"
import * as Tone from "tone"
// import GoogleOAuth from "easy-google-oauth";


function Application() {

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

  //TODO add better instruments and transposition
  return (
    <div className="App">
      <p>
        press <code onClick={() => startToneJs()}>HERE!</code> to start Tone.js
        </p>
      <Pit></Pit>
      <Hiring></Hiring>


    </div>
  );
}

export default Application;
