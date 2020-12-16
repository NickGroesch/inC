import { now } from "tone"
export default class Musician {
    constructor(name, score, synth, uNow) {
        this.score = score
        this.phrase = 0
        this.instrument = synth;
        //this.presentPhrase;
        this.now = uNow;

    }
    //hasAx = function () { return this.instrument !== undefined }

    doNote = function (quittingSoon,) {
        const subject = this.score[this.phrase]
        console.log(subject)
        const { pitch, duration } = this.score[this.phrase].gen.next(quittingSoon).value
        console.log(pitch, duration)
        this.instrument.triggerAttackRelease(pitch, duration * .01, now)

    }
    printDeets = function () {
        console.log(this)
    }
    testNote = function () {
        try {
            this.instrument.triggerAttackRelease("A4", 10, now)
        } catch (e) {
            console.error(e)
        }
    }
}