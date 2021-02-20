import { useState, useEffect, useMemo } from 'react'
import AbstractMusician from "../utils/AbstractMusician"
import Score from "../utils/score"

export default function Musician({ name, synth, transpose }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(0) // -100<=volume reduction in db<=0
    const [onPhrase, setOnPhrase] = useState(1) //1dexed for human readability
    //b/c I memoize the musician in order to preserve its identity/integrity, the render phase never reconsiders it's changed property values ergo useState
    const musician = useMemo(() => {
        return new AbstractMusician(name, synth, new Score(transpose))
    }, [name, synth, transpose])

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
    const handleVolume = newVolume => {
        setVolume(newVolume)
        musician.setVolume(newVolume / 100)

    }
    //show phraseNum=> not getting 2nd image but others
    return (<div style={{ width: '20%', float: 'left' }}>
        <div onClick={() => timeOuts()}>{musician.name || "nobody"} {onPhrase}</div>
        {isPlaying ?
            <p onClick={() => { musician.doNote(true); setOnPhrase(x => x + 1) }}>prod</p> :
            <p onClick={() => { musician.doNote(); setIsPlaying(true) }}>play</p>
        }
        <p><input type="range" min="-20" max="20" value={volume} onInput={(x) => handleVolume(x.nativeEvent.target.value)} /></p>
        <img src={"/static/ph" + onPhrase + ".png"}></img>
    </div>
    )

}
