//import translators from "./translators" // actually gradus utils were overpowered for this

//We must define an interface for notes
//pitch is measured in MIDI
//duration is measured in muxels. TR uses the 16th note as smallest (but also grace note) so we'll reckon 32nd a muxel
const Note = class {
    constructor([pitch, duration]) {
        this.pitch = pitch // null for rest
        this.duration = duration
    }
    //grace in
}

const phraseGen = function* (notes) {
    let index = 0;
    let gonnaBail = false;
    while (!gonnaBail) {
        gonnaBail = yield notes[index % notes.length]
        index++
    }
}

const Phrase = class {
    constructor(notes) {
        this.notes = []
        notes.forEach(note => {
            this.notes.push(new Note(note))
        });
        this.gen = phraseGen(this.notes)
    }
}

const phrase1 = [
    [60, 1], [64, 7],
    [60, 1], [64, 7],
    [60, 1], [64, 7],
]

const phrase2 = [
    [60, 1], [64, 3], [65, 4], [64, 8]
]

const phrase3 = [
    [null, 4], [64, 4], [65, 4], [64, 4]
]

const phrase4 = [
    [null, 4], [64, 4], [65, 4], [67, 4]
]

const phrase5 = [
    [64, 4], [65, 4], [67, 4], [null, 4]
]

const phrase6 = [[72, 64]]

const phrase7 = [
    [null, 28],
    [60, 2],
    [60, 2],
    [60, 4],
    [null, 36]
]

const phrase8 = [
    [67, 24], [65, 48]
]

const phrase9 = [
    [71, 2], [67, 2], [null, 28]
]

const phrase10 = [
    [71, 2], [67, 2],
]

const phrase11 = [
    [65, 2], [67, 2],
    [71, 2], [67, 2],
    [71, 2], [67, 2],
]

const phrase12 = [
    [65, 4], [67, 4],
    [71, 32], [72, 8],
]

const phrases = [
    phrase1,
    phrase2,
    phrase3,
    phrase4,
    phrase5,
    phrase6,
    phrase7,
    phrase8,
    // phrase9,
    // phrase10,
    // phrase11,
    // phrase12
]
//TODO 13-53 
const score = phrases.map(phrase => new Phrase(phrase))
//console.log(score)

function terminalTerry(maxTimes) {
    for (phrase of score) {
        console.log("AND THEN", phrase)
        //let notGonnaBail = true
        for (let i = 0; i < maxTimes; i++) {//phrase repeats
            let line = ""
            phrase.notes.forEach(note => { //note of phrase
                // while(notGonnaBail){
                //     let count = 0
                let playing = phrase.gen.next().value
                // console.log("Y", playing)
                // console.log("Z", note)
                for (let d = 0; d < playing.duration; d++) {
                    line += (playing.pitch - 60)
                    // }
                }
            })
            console.log(line)
        }
    }

}
terminalTerry(8)


// for (let i = 0; i < 100; i++) {
//     console.log(score[0].gen.next())

// }