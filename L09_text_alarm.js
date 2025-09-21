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

function draw() {
    background(200);

    if (countdown === 0) {
        ba
    }
    textSize(48);
    text(countdown, width/2, height/2);
    textSize(10);
    text("click here to start countdown timer", width/2, height/2+50);
}

function mousePressed() {
    interval = setInterval(reduceCount, 1000);
}

function reduceCount() {
    if (countdown > 0) {
        countdown--;
    }
    else {
        clearInterval(interval);
        soundfx.play();
    }
}