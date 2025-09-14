// write your codes here
function setup() {
    createCanvas(600,400);
    background(200);
}

function draw() {
    background(200);
    textSize(72);
    textAlign(CENTER, CENTER);
    let h = hour();
    let m = min
    text(nf(hour(),2) + ":" + nf(minute(),2) + ":" + nf(second(),2), width/2, height/2);
}