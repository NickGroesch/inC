import { useState, useEffect, useMemo } from 'react'
import * as Tone from "tone"
import VolumeSlider from "./VolumeSlider"
import Musician from "./Musician"

function Pit({ players }) {
    const [volume, setVolume] = useState(0)

    return (
        <div style={{ width: '80%', float: 'left' }}>
            {/* <VolumeSlider
                volume={volume}
                setVolume={setVolume}
                min={-999}
                max={36}
                step={3}
            />
            <h1>volume {volume}</h1> */}
            <Musician name="tina"
                synth={new Tone.Synth()}
                transpose={0}
                index="t"
                gain={0} />
            <Musician name="gina"
                synth={new Tone.PolySynth()}
                index="g"
                gain={-12}
                transpose={-12} />
            <Musician name="mina"
                synth={new Tone.DuoSynth()}
                index="m"
                gain={-48}
                transpose={12} />
            <Musician name="lina"
                index="l"
                synth={new Tone.FMSynth()}
                gain={-12}
                transpose={0} />
            <Musician name="bill"
                synth={new Tone.Synth()}
                transpose={-24}
                index="b"
                gain={0} />
            <Musician name="phill"
                synth={new Tone.PolySynth()}
                index="p"
                gain={-12}
                transpose={-24} />
            <Musician name="mcgill"
                synth={new Tone.DuoSynth()}
                index="c"
                gain={-48}
                transpose={-24} />
            <Musician name="williamina ann marie mcPherson nee schmidt, ThD"
                index="w"
                synth={new Tone.FMSynth()}
                gain={-12}
                transpose={12} />
            {/* 
            {players.length ? players.map((player, index) => {
                // console.log(player)
                return (<Musician
                    key={player.name + index}//just the index DOES NOT SOLVE problem //https://coderwall.com/p/jdybeq/the-importance-of-component-keys-in-react-js
                    //https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318
                    index={index}
                    name={player.name}
                    synth={new Tone[player.synth]()}
                    gain={player.gain}
                    transpose={player.transpose} />)
            }) : ""} 
            */}
        </div >
    )
}

export default Pit