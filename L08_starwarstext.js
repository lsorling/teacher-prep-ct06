// write your codes here
let ypos;

function preload() {

}

function setup() {
    createCanvas(600,600);
    ypos = height;

    background("black");
    fill("cyan");
    textSize(32);
    text("hello world!", 0, 0);
}

function draw() {
    ypos = ypos - 0.6;
}