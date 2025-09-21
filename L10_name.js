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
    
    yourName = "Charlie";

    nameInput = createInput();
    nameInput.position(300,335);
    nameInput.input(updateName);

    ageInput = createInput();
    ageInput.position(300,365);
    ageInput.input(updateAge);

    colorPicker = createColorPicker("pink");
    colorPicker.position(300,395);
    background(colorPicker.value());

}

function updateName() {
    yourName = nameInput.value();
}

function updateAge() {
    yourAge = ageInput.value();
}

function draw() {
    background(colorPicker.value());

    // rect white color
    fill("white");
    rect(70,50,460,250);

    textSize(44);
    fill("black");
    textAlign(CENTER, CENTER);
    //yourName = "Charlie";
    text(yourName, 300,150);
    yourAge = "15";
    text(yourAge, 300,205);

    textSize(18);
    textAlign(RIGHT, TOP);
    text("Enter your name:", 290,335);
    text("Enter your age:", 290,365);

    text("Pick a background colour:", 290,400);
}