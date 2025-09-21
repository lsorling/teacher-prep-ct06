// write your codes here
let bgColor;

let nameInput;
let ageInput;
let colorPicker;

function preload() {

}

function setup() {
    createCanvas(600,600);

    colorPicker = createColorPicker("pink");
    colorPicker.position(260,300);
    background(colorPicker.value());

}

function draw() {
    background(colorPicker.value());

    textSize(18);
    textAlign(RIGHT, TOP);
    text("Pick a background colour:", 250,300);
}