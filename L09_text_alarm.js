// write your codes here
function setup() {
    createCanvas(600,400);
    background(200);
}

function draw() {
    background(200);
    textSize(72);
    textAlign(CENTER, CENTER);
    let hh = hour();
    let mm = minute();
    let ss = second();

    text(nf(hh,2), width/2, 50);
    text(nf(mm,2), width/2, 100);
    text(nf(ss,2), width/2, 150);
}