// students find it fun to code something like this in class
// ct06-mon-530pm

// global variables
let shapeColor = "cyan";
let penSize = 5;

function setup() {
    createCanvas(600, 400);
    background(220);
    textSize(16);
    textAlign(CENTER, CENTER);
    drawInstructions();
}

function draw() {
    noStroke();
}

function mousePressed() {
    penSize = 5;
}
function mouseDragged() {
    fill(shapeColor);
    circle(mouseX, mouseY, penSize);
    penSize += 0.5;
}

function keyPressed() {
    if (key === 'r') {
        shapeColor = color("red");
    }
    else if (key === 'b') {
        shapeColor = color("blue");
    }
    else if (key === 'g') {
        shapeColor = color("green");
    }
    else if (key === 'z') {
        background(220);
        drawInstructions();
    }
    else {
        shapeColor = color("black");
    }
}

function drawInstructions() {
    fill("black");
    text("Welcome to Doodle App", 300, 20);
    text("Pressed R key to use Red Pen", 300, 40);
    text("G key for Green Pen", 300, 60);
    text("B key for Blue Pen", 300, 80);
    text("Z key to erase everything!", 300, 100);
    fill(shapeColor);
}