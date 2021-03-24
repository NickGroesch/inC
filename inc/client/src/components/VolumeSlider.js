import { useCallback, useMemo } from 'react'
import { scaleLog } from 'd3-scale'


export default function VolumeSlider(props) {
    const { volume, min, max, step, setVolume } = props;
    const myScale = useCallback(scaleLog().range([min, max]), [min, max])
    const logStep = 9 / ((max - min) / step);
    const handleVolume = value => {
        setVolume(myScale(value))
    }
    console.log(myScale)
    return (<>
        <input type="range"
            min={0}
            max={10}
            step={logStep}
            value={isNaN(myScale.invert(volume)) ? 0 : myScale.invert(volume)}
            onChange={e => { handleVolume(e.target.value) }
            } />
    </>)

}

