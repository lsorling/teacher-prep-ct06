let timerId;
let showInstructions = true;
let counter = 15;
let soundfx;
let state = "start"; // start-counting-stopped

function preload() {
    soundfx = loadSound("assets/bossaNova.mp3");
}

function setup() {
    createCanvas(600, 400);
    background("pink");
}

function draw() {
    background("pink");

    if (state === "stopped") {
        background("indigo");
        if (!soundfx.isPlaying()) {
            counter = 15;
        }
    }

    textSize(40);
    textAlign(CENTER, CENTER);
    text(counter, width/2, height/2);
    textSize(16);
    if (state === "counting") {
        text("Click to start the count down timer", width/2, height/2+50);
    }
}

function mousePressed() {
    

    if (state === "start" || ) {
        timerId = setInterval(countdown, 1000);
    }
    else {
        clearInterval(timerId);
        console.log("what is timer id?" + timerId);
    }
}

function countdown() {
    counter--;
    /*
    let it go negative first, ask the students what to do with this?
    */
    if (counter === 0) {
        clearInterval(timerId);
        soundfx.play(); // sound play cannot be in draw() loop
        showInstructions = true;
    }
}