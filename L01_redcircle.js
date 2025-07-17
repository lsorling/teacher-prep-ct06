function setup(){
    createCanvas(600, 400);
    background(220);
}

function draw(){
    fill(255, 0, 0);
    ellipse(300,100,80,80);
    
    // Todo: Challenge 3 Traffic Light
    fill("orange");
    ellipse(300,185,80,80);
    fill("green");
    ellipse(300,270,80,80);

}