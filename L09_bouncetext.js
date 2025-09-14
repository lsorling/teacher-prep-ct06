// write your codes here
let xpos;
let speedX = -0.6;

function preload() {

}

function setup() {
    createCanvas(600,600);
    xpos = width;

    background("black");
    fill("cyan");
    textSize(32);
    textAlign(CENTER, CENTER); // x, y
}

function draw() {
    background("black");

    // sequence matters
    translate(xpos, height/2); // do this line first, draw text
    scale(1, 3); //

    // then draw text
    text("bounce text", 0, 0);

    xpos = xpos + speedX;
    if (xpos < 0) {
        speedX = speedX * -1;
    }
    if (xpos > width) {
        speedX = speedX * -1;
    }
}