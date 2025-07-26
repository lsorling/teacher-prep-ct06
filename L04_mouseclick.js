// write your codes here
// global variables goes here
let img;

// preload() will wait for all resources to be loaded into memory
// then it will call setup() in the p5.js library

function preload() {
    img = loadImage('https://cdn.pixabay.com/photo/2017/04/21/02/17/calendar-2247443_1280.png');
}
// run once like when green flag clicked
function setup() {
    createCanvas(500, 300);
    background(200);
    noStroke();

    image(img, 100,100,64,64);
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