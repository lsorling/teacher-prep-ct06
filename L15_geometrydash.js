// write your codes here
/*
cool
i can remember how to control the player
using gravity is pulling it down

cos i can remember how the player control with gravity and velocity
*/

/*
do obstacles
*/

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
    fill("red");
    rect(0,height-15,width,10);
    playerYpos = playerYpos+playerVelocityY;
    playerVelocityY = playerVelocityY+1.5;
    if (keyIsDown(32)) {
        playerVelocityY = -25;
    }
    // must stop the player from going down further
    if (playerYpos > height-80) {
        playerYpos = height-80;
    }
}