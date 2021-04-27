import React from 'react'
import "./PanSlider.css"

export default function PanSlider(props) {
    const { pan, setPan } = props;
    return (<>
        <input className="pan"
            type="range"
            min={-1}
            max={1}
            step={.1}
            value={pan}
            onChange={e => {
                setPan(parseFloat(e.target.value))//TODO:appears not to work
            }
            } />
    </>)

}

