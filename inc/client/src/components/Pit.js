import { useState, useEffect, useMemo } from 'react'
import Musician from "./Musician"
import * as Tone from "tone"

function Pit() {
    return (
        <div style={{ width: '80%', float: 'left' }}>

            <Musician name="tina"
                synth={new Tone.Synth()}
                transpose={0}
                gain={.15} />
            <Musician name="gina"
                synth={new Tone.PolySynth()}
                gain={.12}
                transpose={-12} />
            <Musician name="mina"
                synth={new Tone.DuoSynth()}
                gain={.08}
                transpose={24} />
            <Musician name="lina"
                synth={new Tone.FMSynth()}
                gain={.12}
                transpose={0} />
        </div >
    )
}

export default Pit