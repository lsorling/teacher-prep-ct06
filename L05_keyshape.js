function setup() {
    createCanvas(200, 200);
}

function draw() {

}

function keyPressed() {
    if (key === 'c') {
        background(200);
        circle(width/2, height/2, 200);
    }
}