// write your codes here
let templates = [
    "this is line 1 {noun} {verb}",
    "{verb} line 2 {noun}",
    "{verb} {noun} line 3",
];

function setup() {
    createCanvas(800,600);
    let selected = random(templates);
    let noun = "The boy";
    selected.replace("{noun}", noun)
            .replace("{verb}", verb);
    textSize(36);
    text(selected, 50,50);
}