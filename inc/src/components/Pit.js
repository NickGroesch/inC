import { useState, useEffect, useMemo } from 'react'
import Musician from "./Musician"
import * as Tone from "tone"

function Pit() {
    return (
        <div style={{ width: '80%', float: 'left' }}>

            <Musician name="tina"
                synth={new Tone.Synth()
                    // .toDestination()
                }
                transpose={0}></Musician>
            <Musician name="gina"
                synth={new Tone.PolySynth()
                    // .toDestination()
                }
                transpose={-12}></Musician>
            <Musician name="mina"
                synth={new Tone.DuoSynth()
                    // .toDestination()
                }
                transpose={24}></Musician>
            <Musician name="lina"
                synth={new Tone.FMSynth()
                    // .toDestination()
                }
                transpose={0}></Musician>
        </div>
    )
}

export default Pit