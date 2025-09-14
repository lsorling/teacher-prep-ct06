// write your codes here
let xpos;
let x

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
    translate(xpos, height/2);
    scale(1, 3);

    // then draw text
    text("I am going to bounce left and right", 0, 0);

    xpos = xpos - 0.6;
}