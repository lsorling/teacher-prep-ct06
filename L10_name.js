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

    nameInput = createInput();
    nameInput.position(300,300);
    nameInput.input("");

    colorPicker = createColorPicker("pink");
    colorPicker.position(285,375);
    background(colorPicker.value());

}

function updateName() {
    
}
function draw() {
    background(colorPicker.value());

    // rect white color
    fill("white");
    rect(70,50,460,250);

    textSize(44);
    fill("black");
    textAlign(CENTER, CENTER);
    yourName = "Charlie";
    text(yourName, 300,150);
    yourAge = "15";
    text(yourAge, 300,205);

    textSize(18);
    textAlign(RIGHT, TOP);
    text("Pick a background colour:", 280,380);
}