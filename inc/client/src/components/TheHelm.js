import { useState, useMemo } from 'react'
import { getDestination, } from "tone"
import VolumeSlider from "./VolumeSlider"

export default function TheHelm(props) {
    const [isMuted, setMuted] = useState(false)
    const [mainVolume, setMainVolume] = useState(-20)
    const destination = getDestination()
    const toggleMute = () => {
        destination.mute = !isMuted
        setMuted(!isMuted)
    }
    const handleMainVolume = (volume) => {
        destination.volume.rampTo(volume, 0.05)
        setMainVolume(volume)
    }
    return (<>
        <h1>THE HELM</h1>
        <VolumeSlider
            volume={mainVolume}
            setVolume={handleMainVolume}
            min={-66}
            max={0}
            step={1}
        />
        <h1>volume {mainVolume}</h1>
        <button onClick={() => toggleMute()}>{isMuted ? "Unmute" : "Silence"}</button>
    </>)

}

