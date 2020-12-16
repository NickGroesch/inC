import { useState, useEffect, useMemo } from 'react'
import AbstractMusician from "../utils/AbstractMusician"
import Score from "../utils/score"

export default function Musician({ name, synth, transpose }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [onPhrase, setOnPhrase] = useState(0)
    //b/c I memoize the musician in order to preserve its identity/integrity, the render phase never reconsiders it's changed property values ergo useState
    const musician = useMemo(() => {
        return new AbstractMusician(name, synth, new Score(transpose))
    }, [name, synth, Score])

    const timeOuts = () => {
        const tOs = [10, 100, 1000]
        const printTO = function (TO) {
            console.log(TO)
        }
        tOs.forEach(tO => wrapInTimeOut(printTO, tO))
    }
    const wrapInTimeOut = function (func, tOut) {
        return setTimeout(() => func(tOut), tOut)
    }
    //show phraseNum
    return (<div style={{ width: '20%', float: 'left' }}>
        <div onClick={() => timeOuts()}>{musician.name || "nobody"} {musician.phrase}</div>
        {isPlaying ?
            <p onClick={() => { musician.doNote(true); setOnPhrase(x => x + 1) }}>prod</p> :
            <p onClick={() => { musician.doNote(); setIsPlaying(true) }}>play</p>
        }
    </div>
    )

}
