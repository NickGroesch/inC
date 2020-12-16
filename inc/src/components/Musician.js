import { useState, useEffect, useMemo } from 'react'
import AbstractMusician from "../utils/AbstractMusician"
import score from "../utils/score"

function Musician({ name, synth, score }) {
    const musician = useMemo(() => new AbstractMusician(name, synth, score), [name, synth, score])


    return (
        <div>{musician.name || "nobody"}</div>
    )

}