// write your codes here
let templates = [
    "{noun} {verb} over the wall like humpy dumpy",
    "in Roblox, {noun} is {verb}ing",
    "{verb} {noun} line 3",
];

function setup() {
    createCanvas(800,600);
    let selected = random(templates);
    let noun = "The boy";
    let verb = "jump";
    selected = selected.replace("{noun}", noun);
    selected = selected.replace("{verb}", verb);
    textSize(36);
    text(selected, 50,50);
}