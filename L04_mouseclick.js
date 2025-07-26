// write your codes here
// global variables goes here
let img;

// preload() will wait for all resources to be loaded into memory
// then it will call setup() in the p5.js library

function preload() {
    img = image('https://pixabay.com/vectors/calendar-months-days-date-dates-2247443/');
}
// run once like when green flag clicked
function setup() {
    createCanvas(500, 300);
    background(200);
    noStroke();
}

// forever block; repeats 60 times per second
function draw() {
    //background(200);
    //circle(50,50,50);
}

function mousePressed() {
    fill(0,0,0, 20);
}

function mouseReleased() {
    // fill("black", 50);
}

function mouseDragged() {
    circle(mouseX, mouseY, 50);
}