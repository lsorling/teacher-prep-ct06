let timerId;
let useTimer = false;
let counter = 15;
let soundfx;

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

function countdown() {
    counter--;
}