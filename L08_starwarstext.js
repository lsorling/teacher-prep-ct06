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
    textAlign(CENTER);

}

function draw() {
    background("black");
    text("hello world!", 0, 60);

    //translate(width/2, ypos)
    //scale(1, 3);
    ypos = ypos - 0.6;
}