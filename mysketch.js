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
    fill("steelblue");
    noStroke();
    textSize(46);
    textAlign(CENTER, CENTER); // got more ENUMS available for textAlign
}

function draw() {
    background(220);
    // circle(50,50,25);
    // if you cannot see your mouse pointer, use this line
    circle(mouseX,mouseY,25);
    text(whichKey, width/2, height/2);
}

function keyPressed() {
    whichKey = key;
}