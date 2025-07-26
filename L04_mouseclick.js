// write your codes here
// global variables goes here
let img;

// preload() will wait for all resources to be loaded into memory
// then it will call setup() in the p5.js library

function preload() {
    // https://cdn.pixabay.com/photo/2022/04/27/01/11/weather-7159425_1280.png
    img = loadImage('https://cdn.pixabay.com/photo/2022/04/27/01/12/weather-7159428_1280.png');
    // goto pixabay
    // choose the image you liked; right-click there is an option to copy image address
}
// run once like when green flag clicked
function setup() {
    createCanvas(500, 300);
    background(200);
    noStroke();

    imageMode(CENTER);
    image(img, 100,100,200,200);
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