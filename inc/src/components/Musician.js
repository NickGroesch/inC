import { useState, useEffect, useMemo } from 'react'
import AbstractMusician from "../utils/AbstractMusician"
import Score from "../utils/score"

export default function Musician({ name, synth }) {
    const musician = useMemo(() => {
        return new AbstractMusician(name, synth, new Score())
    }, [name, synth, Score])


    return (<>
        <div>{musician.name || "nobody"}</div>
        <p onClick={() => musician.doNote()}>play</p>
        <p onClick={() => musician.doNote(true)}>skip</p>
        <p onClick={() => musician.testNote()}>test</p>
    </>
    )

}
