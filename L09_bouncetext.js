// write your codes here
let xpos;

function preload() {

}

function setup() {
    createCanvas(600,600);
    xpos = height;

    background("black");
    fill("cyan");
    textSize(32);
    textAlign(CENTER, CENTER); // x, y
}

function draw() {
    background("black");

    // sequence matters
    //translate(xpos, height/2);
    //scale(1, 3);

    // then draw text
    text("I am going to bounce left and right", width/2, height/2);

    xpos = xpos - 0.6;
}