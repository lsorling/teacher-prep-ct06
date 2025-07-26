// write your codes here
// global variables goes here
let img;

// preload() will wait for all resources to be loaded into memory
// then it will call setup() in the p5.js library

function preload() {
    // https://cdn.pixabay.com/photo/2022/04/27/01/11/weather-7159425_1280.png
    img = loadImage('https://cdn.pixabay.com/photo/2022/04/27/01/12/weather-7159428_1280.png');
    // goto pixabay or unsplash
    // choose the image you liked; right-click there is an option to copy image address
}
// run once like when green flag clicked
function setup() {
    createCanvas(500, 300);
    background('black');
    noStroke();

    imageMode(CENTER);
    image(img, 100,100,128,128);

    fill('#ff3366');
    rect(150,30,50,50);
    fill('#3366ff');
    rect(150,90,50,50);
    fill('#66ff33');
    rect(150,150,50,50);

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