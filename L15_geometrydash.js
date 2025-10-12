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

let spikesX = [];

function setup() {
    createCanvas(800,600);
    background("black");
    playerYpos = height-65;
    playerVelocityY = 2;

    for (let index=0; index<3; index++) {
        spikesX[index] = index *65 + width-random(20,50);
    }
}
/*
i need 3 spikes in an array
*/
function drawSpike(xpos, ypos, size) {
    fill("lime");
    triangle(xpos,ypos, xpos+size/2, ypos-size, xpos+size, ypos);
}

function draw() {
    background("black");
    fill(220);
    textAlign(CENTER, CENTER);
    textSize(24);
    text("Press space to jump", width/2, 50);
    fill("cyan");
    rect(80,playerYpos,50,50,10);
    fill("red");
    rect(0,height-15,width,10);
    playerYpos = playerYpos+playerVelocityY;
    playerVelocityY = playerVelocityY+0.8;
    if (keyIsDown(32)) {
        playerVelocityY = -20;
    }
    // must stop the player from going down further
    if (playerYpos > height-65) {
        playerYpos = height-65;
    }
    for (let index=0; index<3; index++) {
        let obstaclesX = spikesX[index];
        drawSpike(obstaclesX, height-15, 35);
        obstaclesX = obstaclesX - random(1,5); // x velocity is 5;
        if (obstaclesX < 0) {
            obstaclesX = width + random(10,50);
        }
        spikesX[index] = obstaclesX;
    }
}