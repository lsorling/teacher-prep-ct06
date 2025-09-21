// write your codes here
let soundfx;

function preload() {
    soundfx = loadSound("assets/bossaNova.mp3");
}

function setup() {
    createCanvas(600,400);
    background(200);
    textSize(72);
    textAlign(CENTER, CENTER);
}

// do slowly for monday class
// function draw() {
//     background(200);

//     let hh = hour();
//     let mm = minute();
//     let ss = second();

//     text(nf(hh,2), width/2, 50);
//     text(nf(mm,2), width/2, 120);
//     text(nf(ss,2), width/2, 190);
// }

let countdown = 15;
let interval;
let timerStart = false;

function draw() {
    background(200);

    if (countdown === 0) {
        background("hotpink");
    }
    textSize(48);
    text(countdown, width/2, height/2);
    textSize(10);
    if (!timerStart) {
        countdown = 15;
        text("click here to start countdown timer", width/2, height/2+50);
    }
}

function mousePressed() {
    timerStart = !timerStart;
    if (timerStart) {
        interval = setInterval(reduceCount, 1000);
        countdown = 15;
    }
}

function reduceCount() {
    if (countdown > 0) {
        countdown--;
    }
    else {
        timerStart = false;
        clearInterval(interval);
        soundfx.play();
    }
}