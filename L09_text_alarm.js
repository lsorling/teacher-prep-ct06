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
        removeInterval()
    }
}