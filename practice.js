let balls = [];
const COUNT = 20;

// run once: like when green flag clicked
function setup() {
    createCanvas(400, 400);
    // print("once");

    for (let index=0; index<COUNT; index++) {
        balls[index] = new Obstacle();
    }
}

// forever block
function draw() {
    background(220);
    fill("hotpink");
    textSize(40);
    text("Arrays", 50, 50);
    // print("again");

    for (let index=0; index<COUNT; index++) {
        balls[index].draw();
    }
}

/*
target
1. create a ball (random x and y)
2. with a function draw
3. use an array of 10 balls
4. let them fall from top of screen to the bottom
   and stop there if reaches the bottom of the screen
-done
*/

/*
i need a player,
use left or right arrow, to control the player to avoid the falling obstacles
e.g. crossy roads
*/

function Obstacle() {
    this.size = random(5,15);
    this.x = random(10,380);
    this.y = 10; // at the top
    this.velY = random(1,2);
    this.red = 255;
    this.green = random(0,255);
    this.blue = 0;

    this.draw = function() {
        fill(this.red, this.green, this.blue);
        circle(this.x, this.y, this.size*2); // circle needed 2x radius; size is radius
        this.y += this.velY;

        if (this.y < 0) {
            this.velY = -1 * this.velY;
        }
        if (this.y > height) {
            this.velY = -1 * this.velY;
        }
    }
} 