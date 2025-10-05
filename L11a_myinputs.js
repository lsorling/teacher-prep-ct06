let xpos = 50;
let speed = 3;
function setup() {
    createCanvas(600,400);
    background(200);
}

function draw() {
    background(200);
    noStroke();
    fill("red");
    circle(xpos, height/2, 50);
    xpos = xpos + speed;
    if (xpos > width) {
        speed = speed * -1;
    }
    if (xpos < 0) {
        speed = speed * -1;
    }
}