import { useState } from 'react'
import ToneSynthOptionPicker from "./SynthOptionPicker"

function Hiring({ makeNoob }) {
    const [moniker, setMoniker] = useState("")
    const [gain, setGain] = useState(.15)
    const [transpose, setTranspose] = useState(0)
    const [itsPublic, setPublic] = useState(false)
    const [synth, setSynth] = useState("AMSynth")

    const handleFakeSubmit = async event => {
        event.preventDefault();
    };
    const handleRealSubmit = async event => {
        event.preventDefault();
        // validation
        const newHire = {
            name: moniker,
            public: itsPublic,
            synth,
            transpose,
            gain
        }
        console.log("easy bake musician oven engaged", newHire)
        makeNoob(newHire)
    };

    return (<div style={{ width: '20%', float: 'left' }}>
        <h2 >Make a Musician</h2>
        <form onSubmit={handleFakeSubmit}>
            {moniker && <button style={{ borderStyle: "outset" }} onClick={handleRealSubmit}>Make me a {moniker}</button>}
            <input type="text" name="moniker" id="musician-moniker" placeholder="jimiHendrix" value={moniker}
                onChange={e => setMoniker(e.target.value)}
            />
            <label htmlFor="gain">Gain: {gain}</label>
            <input type="range" min={0} max={.4} step={.005} name="gain" id="musician-gain"
                value={gain} onChange={e => setGain(parseFloat(e.target.value))}
            />
            <p>

                <label htmlFor="transpose">Transpose: {transpose}</label>
                <input type="range" min={-36} max={24} step={12} name="transpose" id="musician-transpose"
                    value={transpose} onChange={e => setTranspose(parseInt(e.target.value))}
                />

            </p>
            <label htmlFor="public">public </label>
            <input type="checkbox" name="public" id="musician-public"
                defaultChecked={itsPublic}
                onClick={e => setPublic(x => !x)}
            />
            <select name="synth" onChange={e => setSynth(e.target.value)}>
                <option value="AMSynth">AMSynth</option>
                <option value="DuoSynth">DuoSynth</option>
                <option value="FMSynth">FMSynth</option>
                {/* <option value="MembraneSynth">MembraneSynth</option> */}
                <option value="MetalSynth">MetalSynth</option>
                <option value="MonoSynth">MonoSynth</option>
                {/* <option value="NoiseSynth">NoiseSynth</option> */}
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