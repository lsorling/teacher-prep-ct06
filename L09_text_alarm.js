let timerId;
let useTimer = false;
let counter = 15;
let soundfx;

function preload() {
    soundfx = loadSound("assets/bossaNova.mp3");
}

function setup() {
    createCanvas(600, 400);
    background("pink");
}

function draw() {
    textSize(40);
    text(counter, width/2, height/2)
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