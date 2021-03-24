import { useState, useEffect, useMemo } from 'react'
import Musician from "./Musician"
import * as Tone from "tone"

function Pit({ players }) {
    //const [orchestra, setOrchestra] = useState([])

    return (
        <div style={{ width: '80%', float: 'left' }}>

            <Musician name="tina"
                synth={new Tone.Synth()}
                transpose={0}
                index="t"
                gain={.15} />
            <Musician name="gina"
                synth={new Tone.PolySynth()}
                index="g"
                gain={.12}
                transpose={-12} />
            <Musician name="mina"
                synth={new Tone.DuoSynth()}
                index="m"
                gain={.08}
                transpose={24} />
            <Musician name="lina"
                index="l"
                synth={new Tone.FMSynth()}
                gain={.12}
                transpose={0} />

            {players.length ? players.map((player, index) => {
                console.log(player)
                return (<Musician
                    key={index}
                    index={index}
                    name={player.name}
                    synth={new Tone[player.synth]()}
                    gain={player.gain}
                    transpose={player.transpose} />)
            }) : ""}
        </div >
    )
}

export default Pit