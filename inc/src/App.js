import { useState, useEffect } from 'react'
import './App.css';
import Musician from "./components/Musician"
import logo from "./logo.svg"

function App() {

  const doNoteTest = () => {
    console.log('test')
  }
  useEffect(() => {
    console.log("here's tina")
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code onClick={doNoteTest}>src/App.js</code> and save to reload.
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
