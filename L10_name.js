// write your codes here
let bgColor;

let nameInput;
let ageInput;
let colorPicker;

let yourName;
let yourAge;

function preload() {

}

function setup() {
    createCanvas(600,600);

    colorPicker = createColorPicker("pink");
    colorPicker.position(285,345);
    background(colorPicker.value());

}

function draw() {
    background(colorPicker.value());

    // rect white color
    fill("white");
    rect(70,50,460,250);

    fill("black");
    textAlign(CENTER, CENTER);
    yourName = "Charlie";
    text(yourName, 300,200);
    yourAge = "15";
    text(yourAge, 300,235);

    textSize(18);
    textAlign(RIGHT, TOP);
    text("Pick a background colour:", 280,350);
}