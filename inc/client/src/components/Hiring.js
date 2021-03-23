import { useState } from 'react'
import ToneSynthOptionPicker from "./SynthOptionPicker"

function Hiring() {
    const [moniker, setMoniker] = useState("")
    const [gain, setGain] = useState(.15)
    const [transpose, setTranspose] = useState(0)
    const [shared, setShared] = useState(false)
    const [synth, setSynth] = useState("")

    const handleSubmit = async event => {
        event.preventDefault();

    };

    return (<div style={{ width: '20%', float: 'left' }}>
        <h2 style={{ border: "blue" }}>Make a Musician</h2>
        <form onSubmit={handleSubmit}>
            <label for="moniker">Moniker: {moniker}</label>
            <input type="text" name="moniker" id="musician-moniker" placeholder="jimiHendrix" value={moniker}
                onChange={e => setMoniker(e.target.value)}
            />
            <label for="gain">Gain: {gain}</label>
            <input type="range" min={0} max={.4} step={.005} name="gain" id="musician-gain"
                value={gain} onChange={e => setGain(parseFloat(e.target.value))}
            />
            <p>

                <label for="transpose">Transpose: {transpose}</label>
                <input type="range" min={-36} max={24} step={1} name="transpose" id="musician-transpose"
                    value={transpose} onChange={e => setTranspose(parseInt(e.target.value))}
                />

            </p>
            <label for="shared">shared </label>
            <input type="checkbox" name="shared" id="musician-shared"
                checked={shared}
                onClick={e => setShared(x => !x)}
            />
            <select name="synth" onChange={e => setSynth(e.target.value)}>
                <option value="AMSynth">AMSynth</option>
                <option value="DuoSynth">DuoSynth</option>
                <option value="FMSynth">FMSynth</option>
                <option value="MembraneSynth">MembraneSynth</option>
                <option value="MetalSynth">MetalSynth</option>
                <option value="MonoSynth">MonoSynth</option>
                <option value="NoiseSynth">NoiseSynth</option>
                <option value="PluckSynth">PluckSynth</option>
                <option value="PolySynth">PolySynth</option>
                {/* <option>Sampler</option> */}
                <option value="Synth">Synth</option>
            </select>
            {/* <ToneSynthOptionPicker synth={synth} /> */}
        </form>

    </div >)
}
export default Hiring