const video = document.getElementById('360_video');
var time;



setInterval(function () {
    time = video.currentTime;
    console.log(time);

    if (time >= 20 && time <= 21) {
        document.getElementById('formate_beibehalten').setAttribute('visible', 'true');
    } else if (time >= 27 && time <= 28) {
        document.getElementById('rausch').setAttribute('visible', 'true');
    } else if (time >= 64 && time <= 65) {
        document.getElementById('familie').setAttribute('visible', 'true');
    }
}, 1000);

function clicked_note(note){
    var eye = note.firstElementChild;
    eye.setAttribute('visible', 'false');
}


function leave_note(note){
    var eye = note.firstElementChild;
    eye.setAttribute('visible', 'true');
}