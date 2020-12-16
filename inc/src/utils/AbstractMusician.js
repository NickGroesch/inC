import { now } from "tone"

export default class Musician {
    constructor(name, synth, score, uNow) {
        this.name = name
        this.score = score
        this.phrase = 0
        this.instrument = synth;
        //this.presentPhrase;
        this.now = uNow;

    }
    //hasAx = function () { return this.instrument !== undefined }

    doNote = function (quittingSoon,) {
        const subject = this.score.phrases[this.phrase]
        console.log(subject)
        const genRes = this.score.phrases[this.phrase].gen.next(quittingSoon)
        console.log(genRes)
        if (!genRes.done) {
            const { pitch, duration } = genRes.value
            console.log(pitch, duration)
            this.instrument.triggerAttackRelease(pitch, duration * .01, now())
        } else {
            console.log("DONE")
            this.phrase++
        }

    }
    printDeets = function () {
        console.log(this)
    }
    testNote = function () {
        try {
            this.instrument.triggerAttackRelease("A4", 10, now())
        } catch (e) {
            console.error(e)
        }
    }
}