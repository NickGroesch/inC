import { useState, useEffect, useMemo } from 'react'
import AbstractMusician from "../utils/AbstractMusician"
import Score from "../utils/score"

export default function Musician({ name, synth }) {
    const musician = useMemo(() => {
        return new AbstractMusician(name, synth, new Score())
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
    return (<div css={{ width: '20%', float: 'left' }}>
        <div onClick={() => timeOuts()}>{musician.name || "nobody"}</div>
        <p onClick={() => musician.doNote()}>play</p>
        <p onClick={() => musician.doNote(true)}>skip</p>
        <p onClick={() => musician.testNote()}>test</p>
        <p onClick={() => musician.testNote()}>repeat</p>
    </div>
    )

}
