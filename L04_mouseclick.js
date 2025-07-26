// write your codes here
// global variables goes here

// run once like when green flag clicked
function setup() {
    createCanvas(500, 300);
}

// forever block; repeats 60 times per second
function draw() {
    background(200);
    circle(50,50,50);
}

function mousePressed() {
    fill("hotpink");
}

function mouseReleased() {
    fill("black");
}

function mouseDragged() {
    circle(5,,50);
}