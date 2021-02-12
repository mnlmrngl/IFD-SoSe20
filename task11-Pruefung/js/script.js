const video = document.getElementById('video');
var time;

var cursor = document.getElementById('cursor');

var cursor_proxy = document.querySelectorAll('.cursor-proxy');
for (i = 0; i < cursor_proxy.length; i++) {
    console.log('hierdsaas')
    cursor_proxy[i].setAttribute('proxy-event__enter', 'event: mouseenter; to: #cursor; as: scale-down');
}

// var hover_effect = document.querySelectorAll('.hover-effect');
// for (i = 0; i < hover_effect.length; i++) {
//     console.log('hier')
//     hover_effect[i].setAttribute('event-set__hover-enter', 'scale: 1.2 1.2; _event: mouseenter; _target: #cursor-border');
//     hover_effect[i].setAttribute('event-set__hover-leave', 'scale: 1 1; _event: mouseenter; _target: #cursor-border');
// }

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


function clicked_eye(eye) {
    var note = eye.previousElementSibling;
    var eyes = document.querySelectorAll('.eye');
    for (i = 0; i < eyes.length; i++) {
        console.log('eyes ' + eyes)
        eyes[i].setAttribute('scale', '0 0');
        eyes[i].setAttribute('visible', 'false');
    }
}

function leave_note(note) {
    setTimeout(function () {
        var eyes = document.querySelectorAll('.eye');
        for (i = 0; i < eyes.length; i++) {
            console.log('eyes ' + eyes)
            eyes[i].setAttribute('visible', 'true');
            eyes[i].setAttribute('scale', '1 1');
        }
    }, 550);
}

var audio = document.getElementById('hoverSound');
function playHoverSound() {
    console.log('play')
    audio.play();
}
function stopHoverSound() {
    console.log('stop')
    audio.stop();
}