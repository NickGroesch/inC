let Gain = Tone.Gain
let now = Tone.now //now must be defined before the musicians are instantated
const bpmToMilliseconds = beatsPerMinute => beatsPerMinute
class Musician {
    constructor(name, synth, score, gain) {
        this.name = name
        this.score = score
        this.phrase = 0
        this.instrument = synth;
        //this.channel = new Tone.Channel(-16).toMaster()
        //this.instrument.connect(this.channel)
        this.volume = gain
        this.gainNode = new Gain(this.volume).toDestination();
        this.instrument.connect(this.gainNode)
        this.scale = .082;// tempo of 32nd Note in seconds
        this.TO = null;
        this.ready = true;
        this.readyTO = null;
        this.delayProd = 2500; // how long before you can prod again
        this.ui = null; //placeholder to send back dom updates

    }
}

    Musician.prototype.notToHurry = function () {
    this.ready = false
    this.readyTO = setTimeout(() => {
    this.ready = true
}, this.delayProd)
}

    Musician.prototype.doNote = function (quittingSoon) {
    //might be nice to make quittingSoon finish phrase
    if (!quittingSoon) {
    clearTimeout(this.TO)
} else {
    this.notToHurry()
}

    const genRes = this.score.phrases[this.phrase].gen.next(quittingSoon)
    if (!genRes.done) {
    const {
    pitch, duration
} = genRes.value
    this.instrument.triggerAttackRelease(pitch, duration * this.scale, now())
    const scaledToMs = duration * this.scale * 1000
    this.TO = setTimeout(
    (helper, willQuit) => { //params
    helper.apply(this, [willQuit])
},
    scaledToMs,
    this.doNote, quittingSoon); //args
} else {
    console.log(`${this.name
} is moving on from $ {
    this.phrase
}`)
        this.phrase++
    }
}

Musician.prototype.setVolume = function (gain) {
    gain = parseFloat(gain)
    this.gainNode.gain.rampTo(gain, .1)
}
