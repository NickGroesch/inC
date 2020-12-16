// triggerAttackRelease (
//     note:Frequency,
//     The note to trigger.

//     duration:Time,
//     How long the note should be held for beforetriggering the release. This value must be greater than 0.

//     time?:Time,
//     When the note should be triggered.

//     velocity?:NormalRange
//     The velocity the note should be triggered at.

//     ) => this

console.log(Tone)

document.getElementById('ok').addEventListener("click", function () {
    giveTheManAnOboe()
}
)
let tina;
function giveTheManAnOboe() {
    Tone.start()
    const synth = new Tone.Synth().toDestination();
    const uNow = Tone.now
    tina = new Musiker(score, synth, uNow)
    const now = uNow()
    console.log(now)
    synth.triggerAttackRelease("C4", "8n", now)
    synth.triggerAttackRelease("E4", "8n", now + 0.5)
    synth.triggerAttackRelease("G4", "8n", now + 1)
    console.log(tina)
    tina.doNote()
    // setTimeout(() => {
    //     tina.testNote()
    // }, 3000)
}

