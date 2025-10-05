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
let button;

function setup() {
    createCanvas(600,400);
    background(bgColor);
    colorPicker = createColorPicker(bgColor);
    colorPicker.position(width/2, height/2);

    button = createButton("Generate a Story");
    button.position(width/2, height/2+80);
}

function draw() {
    background(colorPicker.value());
    textAlign(RIGHT,CENTER);
    textSize(18);
    text("Choose a color:", width/2-10, height/2+15);
}