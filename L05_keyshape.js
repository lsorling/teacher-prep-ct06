function setup() {
    createCanvas(200, 200);
}

function draw() {

}

function keyPressed() {
    if (key === 'c') {
        background(200);
        circle(width/2, height/2, 180);
    }
    if (key === 's') {
        background(200);
        rect(180, 180);
    }
    if (key === 't') {
        background(200);
        triangle(20,180, 100,20, 180,180);
    }
}