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
}

function draw() {

}