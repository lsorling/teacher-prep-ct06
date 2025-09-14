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
    text("hello world!", width/2, ypos);

    translate(width/2, ypos)
    //scale(1, 3);
    ypos = ypos - 0.6;

    if (ypos < 0) {
        ypos = height;
    }
}