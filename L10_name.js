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
    colorPicker.position(260,345);
    background(colorPicker.value());

}

function draw() {
    background(colorPicker.value());

    // rect white color
    fill("white");
    rect(70,50,460,250);

    textSize(18);
    textAlign(RIGHT, TOP);
    text("Pick a background colour:", 250,350);
}