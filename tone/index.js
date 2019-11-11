let clave;
let conga_slap;
let conga_open;
let metronome;

window.onload = setup;

function onoff(synth, val) {
    if (val) synth.toMaster();
    else synth.disconnect();
}

function setup() {
    Tone.Transport.bpm.value = 150;

    clave = instrument('clave.ogg', 'C4',
        ["C4", 0, 0, "C4", 0, 0, 0, "C4",
            0, 0, "C4", 0, "C4", 0, 0, 0]);

    conga_slap = instrument('conga_slap.ogg', 'G3',
        [0, 0, "C4", 0, 0, 0, 0, 0]);

    conga_open = instrument('conga_open.ogg', 'C4',
        [0, 0, 0, 0, 0, 0, "C4", "C4",
            0, 0, 0, "C3", "C3", 0, "C4", "C4"]);
    conga_open.volume.value = -5;

    metronome = new Tone.Sampler({'C4': 'metronome.ogg'}, function() {
        let pattern2 = new Tone.Sequence(function(time, note){
            if (note) metronome.triggerAttackRelease(note, '256n', time);
        }, ["C3", "C4", "C3", "C4"], '8n');

        pattern2.start(0);
    });
    metronome.volume.value = -15;

    let anim = new Tone.Sequence(function(time, frame) {
        document.getElementById('metronome').setAttribute('frame', frame);
    }, [...Array(12).keys(), ...[...Array(12).keys()].reverse()], '48n');
    anim.start(0);

    let counting = new Tone.Sequence(function(time, count){
        document.getElementById('metronome').innerHTML = count;
    }, ['1', '2', '3', '4', '5', '6', '7', '8'], '4n');
    counting.start(0);
}

function play() {
    if (Tone.context.state !== 'running') {
        Tone.context.resume();
    }

    if(Tone.Transport.state == 'stopped') {
        Tone.Transport.start();
        document.getElementById('play').innerHTML = 'Stop';
    }
    else {
        Tone.Transport.stop();
        document.getElementById('play').innerHTML = 'Play';
    }
}

function bpmChange (val) {
    Tone.Transport.bpm.value = val;
}



function instrument(sample, sampleNote, pattern) {
    let instr = new Tone.Sampler({[sampleNote]: sample}, function() {
        let tonePattern = new Tone.Sequence(function(time, note){
            if (note) instr.triggerAttackRelease(note, '4n', time);
            document.getElementById(sample.replace('.ogg', '_cb')).setAttribute("on", note !== 0);
        }, pattern, '8n');

        tonePattern.start(0);
    }).toMaster();
    return instr;
}
