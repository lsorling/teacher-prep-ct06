function setup() {
    createCanvas(200, 200);
    background(200);
}

function draw() {

}

function keyPressed() {
    if (key === 'c') {
        // background(200);
        fill("red");
        circle(width/2, height/2, 180);
    }
    if (key === 's') {
        // background(200);
        fill("green");
        rect(20, 20, 160, 160);
    }
    if (key === 't') {
        // background(200);
        fill("blue");
        triangle(20,180, 100,20, 180,180);
    }
}