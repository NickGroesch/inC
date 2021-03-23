import React, { useState } from "react"
//import Tone from "tone"//better I curate the options than extract them
const generalOptions = {//https://tonejs.github.io/docs/r12/AMSynth
    harmonicity: {
        type: "range",
        min: .025,
        max: 4,
        step: 1 / 12,
        default: .5
    },
    portamento: {
        type: "range",
        min: 0,
        max: 1,
        step: .005,
        default: .01
    },
    detune: {
        type: "range",
        min: 0,
        max: 1,
        step: .005,
        default: .01
    },
    oscillator: {
        type: "list"
    }
}
const optionsBySynth = {//the old docs have default options objects!
    AMSynth: [
        generalOptions.harmonicity,
        generalOptions.harmonicity,
        generalOptions.harmonicity,
        generalOptions.harmonicity,
    ]
}

export default function SynthOptions(toneJSsyth) {
    return (<div>
        optionsHERE for {toneJSsyth}
    </div>)
}