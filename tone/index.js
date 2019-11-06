let clave;
let conga_slap;
let conga_open;
let metronome;

function onoff(synth, val) {
    if (val) synth.toMaster();
    else synth.disconnect();
}

function play() {
    if (Tone.context.state !== 'running') {
        Tone.context.resume();
    }

    Tone.Transport.bpm.value = 150;

    clave = new Tone.Sampler({'C4': 'clave3.ogg'}, function() {
        let pattern = new Tone.Sequence(function(time, note){
            if (note) clave.triggerAttackRelease("C4", '4n', time);
        }, [1, 0, 0, 1, 0, 0, 0, 1,
            0, 0, 1, 0, 1, 0, 0, 0,], '8n');
        Tone.Transport.start();
        pattern.start(0);
    }).toMaster();

    conga_slap = new Tone.Sampler({'G3': 'conga slap.ogg'}, function() {
        let pattern = new Tone.Sequence(function(time, note){
            if (note) conga_slap.triggerAttackRelease("G3", '4n', time);
        }, [0, 1, 0, 0], '4n');
        Tone.Transport.start();
        pattern.start(0);
    }).toMaster();
    conga_slap.volume.value = -3;

    conga_open = new Tone.Sampler({'C4': 'conga open.ogg'}, function() {
        let pattern = new Tone.Sequence(function(time, note){
            if (note) conga_open.triggerAttackRelease(note, '4n', time);
        }, [0, 0, 0, 0, 0, 0, "C4", "C4",
            0, 0, 0, "C3", "C3", 0, "C4", "C4"], '8n');
        Tone.Transport.start();
        pattern.start(0);
    }).toMaster();
    conga_open.volume.value = -10;

    metronome = new Tone.Sampler({'C4': 'clave.ogg'}, function() {
        let pattern2 = new Tone.Sequence(function(time, note){
            if (note) metronome.triggerAttackRelease(note, '256n', time);
        }, ["C3", "C4"], '4n');
        Tone.Transport.start();
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

function bpmChange (val) {
    Tone.Transport.bpm.value = val;
}
