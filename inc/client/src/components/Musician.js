import { useState, useEffect, useMemo, useCallback } from 'react'

import AbstractMusician from "../utils/AbstractMusician"
import Score from "../utils/Score"
import VolumeSlider from "./VolumeSlider"
import PanSlider from "./PanSlider"

export default function Musician({ name, synth, transpose, gain, uniqueIndex }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(gain) // -Infinity<=volume reduction in db<=24
    const [pan, setPan] = useState(0)
    const [onPhrase, setOnPhrase] = useState(1) //1dexed for human readability

    //b/c I memoize the musician in order to preserve its identity/integrity, the render phase never reconsiders it's changed property values ergo useState
    const musician = useMemo(() => {
        return new AbstractMusician(name, synth, new Score(transpose), gain)
    }, [name, synth, transpose, gain, uniqueIndex])//seems the addition of uniqueIndex to the deps array prevents reuse of same memo for to allow a different musician for the same 

    const handleVolume = newVolume => {
        console.log('handle vol', musician.name, newVolume)
        //const parsedVolume = parseFloat(newVolume)
        musician.setVolume(newVolume)
        setVolume(newVolume)
    }

    return (<div style={{ width: '25%', float: 'left' }}>
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
        {/* <p><input type="range" min={-120} max={24} step={1} value={volume} onChange={(e) => handleVolume(e.target.value)} /></p> */}
        <VolumeSlider
            volume={volume}
            setVolume={handleVolume}
            min={-240}
            max={0}
            step={1}
        />
        <PanSlider pan={pan} setPan={setPan} />
        <img src={"/static/ph" + onPhrase + ".png"}></img>
    </div>
    )

}
