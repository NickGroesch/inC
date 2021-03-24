import { useState, useMemo } from 'react'
import { getDestination, } from "tone"
import VolumeSlider from "./VolumeSlider"

export default function TheHelm(props) {
    const [isMuted, setMuted] = useState(false)
    const [mainVolume, setMainVolume] = useState(0)
    const destination = getDestination()
    const toggleMute = () => {
        destination.mute = !isMuted
        setMuted(!isMuted)
    }
    return (<>
        <h1>THE HELM</h1>
        <VolumeSlider
            volume={mainVolume}
            setVolume={setMainVolume}
            min={-999}
            max={36}
            step={3}
        />
        <h1>volume {mainVolume}</h1>
        <button onClick={() => toggleMute()}>{isMuted ? "Unmute" : "Silence"}</button>
    </>)

}

