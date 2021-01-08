const video = document.getElementById('360_video');
var time;

var videoControls = document.getElementById('videoControls');

setInterval(function () {
    time = video.currentTime;

    currentTime.setAttribute('value', Math.round(time) + 's / 67s');

    if (time >= 20 && time <= 21) {
        document.getElementById('formate_beibehalten').setAttribute('visible', 'true');
    } else if (time >= 27 && time <= 28) {
        document.getElementById('rausch').setAttribute('visible', 'true');
    } else if (time >= 64 && time <= 65) {
        document.getElementById('familie').setAttribute('visible', 'true');
    }
}, 1000);

function clicked_note(note) {
    if (note.id == 'formate_beibehalten') {
        note.setAttribute('text', 'color: white; align: center; opacity: 1; value: Einzelne Formate beibehalten; color: black; wrapCount: 10');
        note.setAttribute('material', 'ccolor: #ee8fa8; shader: flat; opacity: 1');
    } else if (note.id == 'rausch') {
        note.setAttribute('text', 'color: white; align: center; opacity: 1; value: Ich kann nicht lesen was hier steht; color: black; wrapCount: 10');
        note.setAttribute('material', 'ccolor: #ee8fa8; shader: flat; opacity: 1');
    } else if (note.id == 'familie') {
        note.setAttribute('text', 'color: white; align: center; opacity: 1; value: Zeit für die Familie; color: black; wrapCount: 10');
        note.setAttribute('material', 'ccolor: #ee8fa8; shader: flat; opacity: 1');
    }

    var eyes = document.querySelectorAll('.eye');
    for (i = 0; i < eyes.length; i++) {
        eyes[i].setAttribute('visible', 'false');
    }
}


function leave_note(note) {
    setTimeout(function () {
        note.setAttribute('text', 'opacity: 0');
        note.setAttribute('material', 'opacity: 0');

        var eyes = document.querySelectorAll('.eye');
        for (i = 0; i < eyes.length; i++) {
            eyes[i].setAttribute('visible', 'true');
        }
    }, 550);
}