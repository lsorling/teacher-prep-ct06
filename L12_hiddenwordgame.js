// write your codes here
const words = [
    "BRAVE",
    "ABOVE",
    "DUSTY",
    "COMET",
    "EJECT",
    "FORCE",
    "GHOST",
    "HEIST",
    "INNER",
    "JOKER",
    "KARMA",
    "LOBBY",
    "MINTY",
    "NEEDY",
    "OTHER",
    "PEACH",
    "QUEUE",
    "ROAST",
    "STARE",
    "TEETH",
    "UNSET",
    "VAGUE",
    "WHICH",
    "XEROX",
    "YOUTH",
    "ZEBRA",
];
function setup() {
    const hidden = random(words);
    const hints = "_".repeat(hidden.length);
    console.log("hints:" + hints);

    createCanvas(600,400);
    background("hotpink");
}

function draw() {
    background("hotpink");
    noStroke();
    rect(50,50,500,200,25);
    textAlign(RIGHT,CENTER);
    textSize(24);
    text("A noun", width/2, 25);
}
/*
of all the html elements
we didnt teach the use of slider for numeric values
sad.
*/
/*
my idea was to push canvas down.
and top portion is for html element
but missing label for html elements if not using text()
so abort!
*/