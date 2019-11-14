let loading = 0;
let clave;
let conga_slap;
let conga_open;
let metronome;
let counting;
let piano;
let bass;

window.onload = function () {
    setup();
    let sel = document.getElementById('clave_se');
    for (i in clave.patterns) {
        let option = document.createElement('option');
        option.text = i;
        sel.add(option);
    }
};

function claveChange(val) {
    Tone.Transport.stop();
    clave.sequence.removeAll();
    clave.patterns[val].map((p, i) => clave.sequence.add(i, p));
    // clave.patterns[val].map((p, i) => console.log(`${i}, ${p}`));
    Tone.Transport.start();
}

function onoff(synth, val) {
    if (val) synth.instrument.toMaster();
    else synth.instrument.disconnect();
}

function setup() {
    Tone.Transport.bpm.value = 180;

    clave = instrument('clave',{'C4': 'clave.ogg'},
        {'Son 2/3': [0, "C4", "C4", 0, "C4", [0, "C4"], 0, "C4"],
            'Son 3/2': ["C4", [0, "C4"], 0, "C4", 0, "C4", "C4", 0],
            'Rumba 3/2': ["C4", [0, "C4"], 0, [0, "C4"], 0, "C4", "C4", 0],
            'Rumba 2/3': [0, "C4", "C4", 0, "C4", [0, "C4"], 0, [0, "C4"]]
        }, 'Son 2/3');

    conga_slap = instrument('conga_slap', {'G3': 'conga_slap.ogg'},
        [0, "C4", 0, 0]);
    conga_slap.instrument.volume.value = 3;

    conga_open = instrument('conga_open', {'C4': 'conga_open.ogg'},
        [0, 0, 0, ["C4", "C4"],
            0, [0, "C3"], "C3", ["C4", "C4"]]);
    conga_open.instrument.volume.value = -5;

    metronome = instrument('metronome', {'C4': 'metronome.ogg'},
        ["C3", "C4", "C3", "C4"]);
    metronome.instrument.volume.value = -15;
    metronome.instrument.disconnect();

    counting = instrument('counting',
        {'C3': 'one.ogg', 'D3': 'two.ogg', 'E3': 'three.ogg', 'F3': 'four.ogg',
            'G3': 'five.ogg', 'A3': 'six.ogg', 'B3': 'seven.ogg', 'C4': 'eight.ogg'},
        ["C3", "D3", "E3", "F3",
            "G3", "A3", "B3", "C4"]);
    counting.instrument.volume.value = -10;

    piano = instrument('piano', {'C4': 'piano.ogg'},
        ["C3", ["E3 G3", "F3"], [0, "A3 C4"], [0, "G3"], [0, "B3 D4"], [0, "F3"], [0, "A3 C4"], [0, "C3"]]);
    piano.instrument.volume.value = -5;

    bass = instrument('bass', {'B3': 'bass.ogg'},
        [0, [0, "F2"], 0, "G2", 0, [0, "F2"], 0, "C2"]);
    bass.instrument.volume.value = 3;

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
    Tone.Transport.stop();
    Tone.Transport.bpm.value = val;
    Tone.Transport.start();
}

function volumeChange (val) {
    Tone.Master.volume.value = - (((val-100)/10)**2);
}


function instrument(name, samples, patterns, defaultPattern = undefined) {
    loading++;
    let result = {};
    let instr$;
    let sequence;
    let pattern = Array.isArray(patterns) ? patterns : patterns[defaultPattern];
    let instr = new Tone.Sampler(samples, () => loading--).toMaster();
    instr$ = Rx.Observable.create(observer => {
        sequence = new Tone.Sequence((time, note) => {
            observer.next([time, note]);
        }, pattern, '4n');
        sequence.start(0);
        result.sequence = sequence;
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

    result.observable = instr$;
    result.instrument = instr;
    result.patterns = patterns;
    return result;
}


const notes = ['C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4'];
