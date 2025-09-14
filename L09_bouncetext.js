// write your codes here
let ypos;
let story;

function preload() {

}

function setup() {
    createCanvas(600,600);
    ypos = height;

    background("black");
    fill("cyan");
    textSize(32);
    textAlign(CENTER, CENTER); // x, y

    story = ["long long time ago,",
        "there was this little girl.",
        "her name was Mary...",
        "she has 3 little lambs."
    ]
}

function draw() {
    background("black");

    // sequence matters
    translate(width/2, ypos);
    scale(1, 3);

    // then draw text
    text("Hello", 0, 0);

    ypos = ypos - 0.6;

    // much later only when it works
    if (ypos < 0) {
        ypos = height;
    }
}