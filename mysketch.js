// global variables
let whichKey = "-";

// preload
// synchronous wait till all loaded
function preload() {
    // add media files here
}

function setup() {
    createCanvas(600,400);
    background(220);
    // fill(0,20);
    fill(0,20);
    noStroke();
    textSize(46);
}

function draw() {
    background(220);
    // circle(50,50,25);
    circle(mouseX,mouseY,25);
    text(whichKey, width/2, height/2);
}

function keyPressed() {
    whichKey = key;
}