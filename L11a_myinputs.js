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
let story;

let nameInput;
let yourname = "David";

function setup() {
    createCanvas(600,700);
    background(bgColor);
    colorPicker = createColorPicker(bgColor);
    colorPicker.position(width/2, 200);

    button = createButton("Generate a Story");
    button.position(width/2, 240);
    button.mousePressed(generateStory);

    nameInput = createInput(yourname, "text")
    nameInput.position(width/2, 280);
    nameInput.input(updateName);
}

function updateName() {
    yourname = nameInput.value();
}

function generateStory() {
    story = "this is a random story for " + yourname;
}

function draw() {
    background(colorPicker.value());
    textAlign(RIGHT,CENTER);
    textSize(18);
    fill("black");
    text("Choose a color:", width/2-10, 220);

    fill("white");
    rect(100,350,400,100,25);
    fill("black");
    textSize(14);
    textAlign(LEFT, CENTER);
    text(story, 120, 375);
}