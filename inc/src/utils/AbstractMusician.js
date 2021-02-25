import { now, Gain } from "tone"

class Musician {
    constructor(name, synth, score, uNow) {
        this.name = name
        this.score = score
        this.phrase = 0
        this.volume = .15
        this.gainNode = new Gain(this.volume).toDestination();
        this.instrument = synth;
        this.instrument.connect(this.gainNode)
        this.now = uNow;
        this.scale = .052;//tempo in seconds
        this.TO = null;

    }
    //hasAx = function () { return this.instrument !== undefined }

    doNote = function (quittingSoon) {//might be nice to make quittingSoon finish phrase
        if (!quittingSoon) clearTimeout(this.TO)
        const genRes = this.score.phrases[this.phrase].gen.next(quittingSoon)
        if (!genRes.done) {
            const { pitch, duration } = genRes.value
            this.instrument.triggerAttackRelease(pitch, duration * this.scale, now())
            const scaledToMs = duration * this.scale * 1000
            this.TO = setTimeout(
                (helper, willQuit) => { //params
                    helper.apply(this, [willQuit])
                },
                scaledToMs,
                this.doNote, quittingSoon); //args
        } else {
            console.log(`${this.name} is moving on from ${this.phrase}`)
            this.phrase++
        }
    }
    // repeat() {
    //     //didn't need this
    // }
    // printDeets() {
    //     console.log(this)
    // }

    // testNote() {
    //     try {
    //         this.instrument.triggerAttackRelease("A4", 2, now())
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }
}
    Musician.prototype.setVolume = function (gain)  {
    this.gainNode.gain.rampTo(gain, .1)
}

export default Musician