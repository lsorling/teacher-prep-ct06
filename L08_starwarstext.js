// write your codes here
let ypos;

function preload() {

}

function setup() {
    createCanvas(600,600);
    background("black");
    fill("cyan");
    textSize(32);
    text("hello world!", 110, 50);
}

function draw() {
    ypos = ypos - 0.6;
}