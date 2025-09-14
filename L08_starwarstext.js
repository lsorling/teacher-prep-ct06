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

}

function draw() {
    background("black");
    text("hello world!", 0, ypos);

    translate(width/2, ypos)
    ypos = ypos - 0.6;
}