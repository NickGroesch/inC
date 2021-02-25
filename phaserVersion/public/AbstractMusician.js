let Gain = Tone.Gain
class Musician {
    constructor(name, synth, score) {
        this.name = name
        this.score = score
        this.phrase = 0
        this.volume = .15
        this.gainNode = new Gain(this.volume).toDestination();
        this.instrument = synth;
        this.instrument.connect(this.gainNode)
        this.scale = .082;//tempo in seconds
        this.TO = null;
        this.ready = true;
        this.readyTO = null;

    }
    //hasAx = function () { return this.instrument !== undefined }
    waitHalfASec = function () {
        this.ready = false
        this.readyTO = setTimeout(() => {
            this.ready = true
        }, 500)
    }
    doNote = function (quittingSoon) {
        //might be nice to make quittingSoon finish phrase
        if (!quittingSoon) {
            clearTimeout(this.TO)
        } else { this.waitHalfASec() }

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
            //console.log(`${this.name} is moving on from ${this.phrase}`)
            this.phrase++
        }
    }
}
    Musician.prototype.setVolume = function (gain) {
    this.gainNode.gain.rampTo(gain, .1)
}
