/*
for loop and draw keep inside setup()
*/

function setup() {
    createCanvas(600,400);
    background("hotpink");

    let xpos = 50;
    let ypos = 50;

    for ( let count=0; count<5; count++ ) {
        circle(xpos, ypos, 50);
        xpos = xpos + 50;
        ypos = ypos + 50;
    }
}

function draw() {
    // empty
}