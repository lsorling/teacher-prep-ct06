let xpos;
function setup() {
    createCanvas(600,400);
    background(200);
}

function draw() {
    noStroke();
    fill("red");
    circle(xpos, height/2, 50);
}