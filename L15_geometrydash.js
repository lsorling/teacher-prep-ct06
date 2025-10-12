// write your codes here
let player;
let playerYpos;
let playerVelocityY;

function setup() {
    createCanvas(800,600);
    background("black");
    playerYpos = height-80;
    playerVelocityY = 2
}

function draw() {
    background("black");
    fill("cyan");
    rect(50,playerYpos,50,50,10);
    playerYpos = playerYpos+playerVelocityY;
    playerVelocityY = playerVelocityY-2;
    if (keyIsDown(32)) {
        playerVelocityY = -6;
    }
}