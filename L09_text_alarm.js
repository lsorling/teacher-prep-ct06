
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
    background("pink");
    if (counter <= 0) {
        background("indigo");
    }

    if (!soundfx.isPlaying() && !useTimer) {
        counter = 15;
    }

    textSize(40);
    textAlign(CENTER, CENTER);
    text(counter, width/2, height/2);
    textSize(16);
    if (showInstructions) {
        text("Click to start the count down timer", width/2, height/2+50);
    }
}

function mousePressed() {
    useTimer = !useTimer;

    if (useTimer) {
        timerId = setInterval(countdown, 1000);
    }
    else {
        clearInterval(timerId);
    }
}

function countdown() {
    counter--;
    if (counter === 0) {
        clearInterval(timerId);
        soundfx.play();
        useTimer = false;
    }
}