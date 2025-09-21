
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
    if (counter === 0) {
        background("indigo");
    }
    textSize(40);
    textAlign(CENTER, CENTER);
    text(counter, width/2, height/2);
    textSize(16);
    if (!useTimer) {
        text("Click to start the count down timer", width/2, height/2+50);
    }
}

function mousePressed() {
    useTimer = !useTimer;

    if (useTimer) {
        counter = 15;
        clearInterval(timerId);
        timerId = setInterval(countdown, 1000);
    }
}

function countdown() {
    counter--;
    if (counter <= 0) {
        useTimer = false;
        clearInterval(timerId);
        soundfx.play();
        counter = 15;
    }
}