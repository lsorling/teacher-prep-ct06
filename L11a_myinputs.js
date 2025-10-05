/*
// end sem test question 1
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
    if (xpos > width-25) {
        speed = speed * -1;
    }
    if (xpos < 0+25) {
        speed = speed * -1;
    }
}
*/
let bgColor = "hotpink";
let colorPicker;

function setup() {
    createCanvas(600,400);
    background(bgColor);
    colorPicker = createColorPicker(bgColor);
    colorPicker.position(width/2, height/2);
}

function draw() {
    background(colorPicker.value());
}