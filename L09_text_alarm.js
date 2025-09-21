let timerId;
let useTimer = false;

function preload() {

}

function setup() {

}

function draw() {

}

function mousePressed() {
    useTimer = !useTimer;

    if (useTimer) {
        removeInterval(timerId);
        timerId = setInterval(countdown, 1000);
    }
}