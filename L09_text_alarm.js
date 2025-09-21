let timerId;
let counter = 15;
let soundfx;
let state = "start"; // start-counting-stopped

// the teacher's github uses 2 boolean
// even if i use state variable with 3 values, codes really complicated
// keep it simple then


function preload() {
    soundfx = loadSound("assets/bossaNova.mp3");
}

function setup() {
    createCanvas(600, 400);
    background("pink");
    textFont("Verdana"); // any web-safe fonts see w3schools
}

function draw() {
    background("pink");

    if (state === "stopped") {
        if (soundfx.isPlaying()) {
            background("indigo");
        }
        else {
            counter = 15;
        }
    }

    textSize(40);
    textAlign(CENTER, CENTER);
    text(counter, width/2, height/2);
    if (state != "counting") {
        textSize(16);
        text("Click to start the count down timer", width/2, height/2+50);
    }
}

function mousePressed() {
    if (state === "counting") {
        state = "stopped";
        clearInterval(timerId);
        console.log("what is timer id?" + timerId);
    }
    else {
        state = "counting";
        timerId = setInterval(countdown, 1000);
    }
}

function countdown() {
    counter--;
    /*
    let it go negative first, ask the students what to do with this?
    */
    if (counter === 0) {
        state = "stopped";
        clearInterval(timerId);
        soundfx.play(); // sound play cannot be in draw() loop
    }
}