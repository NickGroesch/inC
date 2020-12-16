import { now } from "tone"

export default class Musician {
    constructor(name, synth, score, uNow) {
        this.name = name
        this.score = score
        this.phrase = 0
        this.instrument = synth;
        this.now = uNow;
        this.scale = .04

    }
    //hasAx = function () { return this.instrument !== undefined }

    doNote = function (quittingSoon,) {
        console.log(this)
        const subject = this.score.phrases[this.phrase]
        console.log(subject)
        const genRes = this.score.phrases[this.phrase].gen.next(quittingSoon)
        console.log(genRes)
        if (!genRes.done) {
            const { pitch, duration } = genRes.value
            console.log(pitch, duration)
            this.instrument.triggerAttackRelease(pitch, duration * this.scale, now())
            const TO = setTimeout((helper, willQuit) => {
                console.log(this)
                console.log(helper)
                helper(willQuit).apply(this)
            }, duration * this.scale * 100,
                this.doNote, quittingSoon);
            console.log(TO)
        } else {
            console.log("DONE")
            this.phrase++
        }
    }
    repeat = function () {

    }
    printDeets = function () {
        console.log(this)
    }

    testNote = function () {
        try {
            this.instrument.triggerAttackRelease("A4", 2, now())
        } catch (e) {
            console.error(e)
        }
    }
}