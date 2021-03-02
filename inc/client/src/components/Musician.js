import { useState, useEffect, useMemo } from 'react'
import AbstractMusician from "../utils/AbstractMusician"
import Score from "../utils/Score"

export default function Musician({ name, synth, transpose, gain }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(gain) // -100<=volume reduction in db<=0
    const [onPhrase, setOnPhrase] = useState(1) //1dexed for human readability
    //b/c I memoize the musician in order to preserve its identity/integrity, the render phase never reconsiders it's changed property values ergo useState
    const musician = useMemo(() => {
        return new AbstractMusician(name, synth, new Score(transpose), gain)
    }, [name, synth, transpose, gain])

    // const timeOuts = () => {
    //     const tOs = [10, 100, 1000]
    //     const printTO = function (TO) {
    //         console.log(TO)
    //     }
    //     tOs.forEach(tO => wrapInTimeOut(printTO, tO))
    // }

    // const wrapInTimeOut = function (func, tOut) {
    //     return setTimeout(() => func(tOut), tOut)
    // }

    const handleVolume = newVolume => {
        console.log('handle vol', musician.name, newVolume)
        const parsedVolume = parseFloat(newVolume)
        setVolume(parsedVolume)
        musician.setVolume(parsedVolume)

    }
    return (<div style={{ width: '20%', float: 'left' }}>
        <div>{musician.name || "nobody"} {onPhrase}</div>
        {isPlaying ?
            <p onClick={() => {
                if (musician.ready) {
                    musician.doNote(true);
                    setOnPhrase(x => x + 1);
                }
            }}>prod</p> :
            <p onClick={() => { musician.doNote(); setIsPlaying(true) }}>play</p>
        }
        <p><input type="range" min={0} max={.4} step={.005} value={volume} onChange={(x) => handleVolume(x.target.value)} /></p>
        <img src={"/static/ph" + onPhrase + ".png"}></img>
    </div>
    )

}
