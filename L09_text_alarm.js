// write your codes here
function setup() {
    createCanvas(600,400);
    background(200);
}

function draw() {
    background(200);
    text(nf(hour(),2), width/2, 50);
    text(nf(minute(),2), width/2, 70);
    text(nf(second(),2), width/2, 90);
}