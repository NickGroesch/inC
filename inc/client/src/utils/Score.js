//notes are [pitch,duration]
//pitch is measured in MIDI
//duration is measured in muxels. TR uses the 16th note as smallest (but also grace note) so we'll reckon 32nd a muxel
const phrase1 = [
    [60, 1], [64, 7],
    [60, 1], [64, 7],
    [60, 1], [64, 7]
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
const phrase6 = [
    [72, 64]
]
const phrase7 = [
    [null, 28], [60, 2], [60, 2], [60, 4], [null, 36]
]
const phrase8 = [
    [67, 24], [65, 48]
]
const phrase9 = [
    [71, 2], [67, 2], [null, 28]
]
const phrase10 = [
    [71, 2], [67, 2]
]
const phrase11 = [
    [65, 2], [67, 2],
    [71, 2], [67, 2],
    [71, 2], [67, 2]
]
const phrase12 = [
    [65, 4], [67, 4],
    [71, 32], [72, 8]
]
const phrase13 = [
    [71, 2], [67, 6],
    [67, 2], [65, 2], [67, 4],
    [null, 6], [67, 26]
]
const phrase14 = [
    [72, 32], [71, 32], [67, 32], [66, 32]
]
const phrase15 = [
    [67, 2], [null, 30]
]
const phrase16 = [
    [67, 2], [71, 2], [72, 2], [71, 2]
]
const phrase17 = [
    [71, 2], [72, 2],
    [71, 2], [72, 2],
    [71, 2], [null, 2]
]
const phrase18 = [
    [64, 2], [66, 2],
    [64, 2], [66, 2],
    [64, 6], [64, 2]
]
const phrase19 = [
    [null, 12], [79, 12]
]
const phrase20 = [
    [64, 2], [66, 2],
    [64, 2], [66, 2],
    [59, 6], [64, 2],
    [66, 2], [64, 2],
    [66, 2], [64, 2]
]
const phrase21 = [
    [66, 24]
]
const phrase22 = [
    [64, 12], [64, 12],
    [64, 12], [64, 12],
    [64, 12], [66, 12],
    [67, 12], [69, 12], [71, 4]
]
const phrase23 = [
    [64, 4], [66, 12],
    [66, 12], [66, 12],
    [66, 12], [66, 12],
    [67, 12], [69, 12], [71, 8]
]
const phrase24 = [
    [64, 4], [66, 4],
    [67, 12], [67, 12],
    [67, 12], [67, 12],
    [67, 12], [69, 12], [71, 4]
]
const phrase25 = [
    [64, 4], [66, 4], [67, 4],
    [69, 12], [69, 12],
    [69, 12], [69, 12],
    [69, 12], [71, 12]
]
const phrase26 = [
    [64, 4], [66, 4], [67, 4], [69, 4],
    [71, 12], [71, 12], [71, 12], [71, 12], [71, 12]
]
const phrase27 = [
    [64, 2], [66, 2],
    [64, 2], [66, 2],
    [67, 4], [64, 2], [64, 2],
    [66, 2], [64, 2],
    [66, 2], [64, 2]
]
const phrase28 = [
    [64, 2], [66, 2],
    [64, 2], [66, 2],
    [64, 6], [64, 2]
]
const phrase29 = [
    [64, 24],
    [67, 24],
    [72, 24]
]
const phrase30 = [
    [72, 48]
]
const phrase31 = [
    [67, 2], [65, 2], [67, 2],
    [71, 2], [65, 2], [71, 2]
]
const phrase32 = [
    [65, 2], [67, 2], [65, 2],
    [67, 2], [71, 2], [65, 26], [67, 12]
]
const phrase33 = [
    [67, 2], [65, 2], [null, 4]
]
const phrase34 = [
    [67, 2], [65, 2]
]
const phrase35 = [
    [65, 2], [67, 2], [71, 2], [67, 2],
    [71, 2], [67, 2], [71, 2], [67, 2],
    [71, 2], [67, 2], [null, 28],
    [72, 8], [79, 24],
    [81, 4], [79, 8], [83, 4],
    [81, 14], [79, 8], [76, 24],
    [79, 4], [78, 28], [null, 20], [76, 20], [77, 48]
]
const phrase36 = [
    [65, 2], [67, 2], [71, 2], [67, 2], [71, 2], [67, 2]
]
const phrase37 = [
    [65, 2], [67, 2]
]
const phrase38 = [
    [65, 2], [67, 2], [71, 2]
]
const phrase39 = [
    [71, 2], [67, 2],
    [65, 2], [67, 2], [71, 2], [72, 2]
]
const phrase40 = [
    [71, 2], [65, 2]
]
const phrase41 = [
    [71, 2], [67, 2]
]
const phrase42 = [
    [72, 32], [71, 32], [69, 32], [72, 32]
]
const phrase43 = [
    [77, 2], [76, 2],
    [77, 2], [76, 2],
    [76, 4], [76, 4],
    [76, 4], [77, 2], [76, 2]
]
const phrase44 = [
    [77, 4], [76, 8],
    [76, 4], [72, 8]
]
const phrase45 = [
    [74, 8], [74, 8],
    [67, 8]
]
const phrase46 = [
    [67, 2], [74, 2], [76, 2], [74, 2],
    [null, 4], [67, 4],
    [null, 4], [67, 4],
    [null, 4], [67, 4],
    [67, 2], [74, 2], [76, 2], [74, 2]
]
const phrase47 = [
    [74, 2], [76, 2], [74, 4]
]
const phrase48 = [
    [67, 48], [67, 32], [65, 40]
]
const phrase49 = [
    [65, 2], [67, 2], [70, 2], [67, 2], [70, 2], [67, 2]
]
const phrase50 = [
    [65, 2], [67, 2]
]
const phrase51 = [
    [65, 2], [67, 2], [70, 2]
]
const phrase52 = [
    [67, 2], [70, 2]
]
const phrase53 = [
    [70, 2], [67, 2]
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
    phrase9,
    phrase10,
    phrase11,
    phrase12,
    phrase13,
    phrase14,
    phrase15,
    phrase16,
    phrase17,
    phrase18,
    phrase19,
    phrase20,
    phrase21,
    phrase22,
    phrase23,
    phrase24,
    phrase25,
    phrase26,
    phrase27,
    phrase28,
    phrase29,
    phrase30,
    phrase31,
    phrase32,
    phrase33,
    phrase34,
    phrase35,
    phrase36,
    phrase37,
    phrase38,
    phrase39,
    phrase40,
    phrase41,
    phrase42,
    phrase43,
    phrase44,
    phrase45,
    phrase46,
    phrase47,
    phrase48,
    phrase49,
    phrase50,
    phrase51,
    phrase52,
    phrase53,
]
//TODO 29-53

const phraseGen = function* (notes) {
    let index = 0;
    let gonnaBail = false;
    while (!gonnaBail) {
        gonnaBail = yield notes[index % notes.length]
        index++
    }

}

const midiPCMap = ["C", "Cs", "D", "Ds", "E", "F", "F#", "G", "Gs", "A", "Bb", "B"]

const midiToPc = function (midiPitchNum) {
    let pClass = midiPCMap[midiPitchNum % 12];
    let octave = Math.floor(midiPitchNum / 12) - 1;
    return pClass + octave
}
class Note {
    constructor([pitch, duration], transpose = 0) {
        if (pitch) {
            this.pitch = midiToPc(pitch + transpose) // null for rest
        } else {
            this.pitch = null//hope this fixes rests showing up as low notes in transposed
        }
        this.duration = duration
    }
    //grace in
}

class Phrase {
    constructor(notes, transpose) {
        this.notes = []
        notes.forEach(note => {
            this.notes.push(new Note(note, transpose))
        });
        this.gen = phraseGen(this.notes)
        this.length = this.notes.length
    }
}

export default function Score(transpose) { this.phrases = phrases.map(phrase => new Phrase(phrase, transpose)) }