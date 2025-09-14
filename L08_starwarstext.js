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
    textAlign(CENTER);

    story = ["long long time ago,",
        "there was this little girl.",
        "her name was Mary..."
    ]
}

function draw() {
    background("black");
    //text("hello world!", width/2, ypos);
    let nextline = 0;
    for (let index=0; index<story.length; index++) {
        text(story[index], width, ypos+nextline)
    }

    translate(width/2, ypos)
    //scale(1, 3);
    ypos = ypos - 0.6;

    if (ypos < 0) {
        ypos = height;
    }
}