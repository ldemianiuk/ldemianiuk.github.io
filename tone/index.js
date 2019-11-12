let loading = 0;
let clave;
let conga_slap;
let conga_open;
let metronome;
let counting;
let piano;

window.onload = setup;

function onoff(synth, val) {
    if (val) synth.toMaster();
    else synth.disconnect();
}

function setup() {
    Tone.Transport.bpm.value = 150;

    clave = instrument('clave',{'C4': 'clave.ogg'},
        [0, "C4", "C4", 0,
            "C4", [0, "C4"], 0, "C4"]);

    conga_slap = instrument('conga_slap', {'G3': 'conga_slap.ogg'},
        [0, "C4", 0, 0]);
    conga_slap.volume.value = 3;

    let slap2 = instrument('conga_something', {'G3': 'conga_slap.ogg'},
        [["C4", "C4"]]);
    slap2.volume.value = -10;

    conga_open = instrument('conga_open', {'C4': 'conga_open.ogg'},
        [0, 0, 0, ["C4", "C4"],
            0, [0, "C3"], "C3", ["C4", "C4"]]);
    conga_open.volume.value = -5;

    metronome = instrument('metronome', {'C4': 'metronome.ogg'},
        ["C3", "C4", "C3", "C4"]);
    metronome.volume.value = -15;
    metronome.disconnect();

    counting = instrument('counting',
        {'C3': 'one.ogg', 'D3': 'two.ogg', 'E3': 'three.ogg', 'F3': 'four.ogg',
            'G3': 'five.ogg', 'A3': 'six.ogg', 'B3': 'seven.ogg', 'C4': 'eight.ogg'},
        ["C3", "D3", "E3", "F3",
            "G3", "A3", "B3", "C4"]);
    counting.volume.value = -10;

    piano = instrument('piano', {'C4': 'piano.ogg'},
        ["C3", ["E3 G3", "F3"], [0, "A3 C4"], [0, "G3"], [0, "B3 D4"], [0, "F3"], [0, "A3 C4"], [0, "C3"]]);
    piano.volume.value = -5;

    let anim = new Tone.Sequence(function(time, frame) {
        document.getElementById('metronome').setAttribute('frame', frame);
    }, [...Array(12).keys(), ...[...Array(12).keys()].reverse()], '48n');
    anim.start(0);

    let counter = new Tone.Sequence(function(time, count){
        document.getElementById('metronome').innerHTML = count;
    }, ['1', '1&', '2', '2&', '3', '3&', '4', '4&', '5', '5&', '6', '6&', '7', '7&', '8', '8&'], '8n');
    counter.start(0);

    onSamplesLoaded(() =>
        document.getElementById('overlay').style.display = 'none');
}


function onSamplesLoaded(fn) {
    if(loading == 0) fn();
    else setTimeout(() => onSamplesLoaded(fn), 100);
}

function play() {
    if (Tone.context.state !== 'running') {
        Tone.context.resume();
    }
    if (Tone.Transport.state == 'stopped') {
        Tone.Transport.start();
        document.getElementById('play').innerHTML = 'Stop';
    } else {
        Tone.Transport.stop();
        document.getElementById('play').innerHTML = 'Play';
    }
}

function bpmChange (val) {
    Tone.Transport.bpm.value = val;
}



function instrument(name, samples, pattern) {
    loading++;
    let instr$;
    let tonePattern;
    let instr = new Tone.Sampler(samples, () => loading--).toMaster();
    instr$ = Rx.Observable.create(observer => {
        tonePattern = new Tone.Sequence((time, note) => {
            observer.next([time, note]);
        }, pattern, '4n');
        tonePattern.start(0);
    }).publish();
    instr$.connect();


    instr$.subscribe(function play([time, note]) {
        if (note) {
            for (let n of note.split(' '))
                instr.triggerAttackRelease(n, '4n', time);
        }
    });

    instr$.subscribe(function animate([time, note]) {
        let label = document.getElementById(name + '_cb')
        if(label) {
            label.setAttribute("on", note !== 0);
            setTimeout(() => {
                label.setAttribute("on", "false");
            }, 100);
        }
    });

    instr.observable = instr$;

    return instr;
}


const notes = ['C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4'];
