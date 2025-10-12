// write your codes here
let templates = [
    "this is line 1 {noun} {verb}",
    "{verb} line 2 {noun}",
    "{verb} {noun} line 3",
];

function setup() {
    createCanvas(800,600);
    let selected = random(templates);
    text(selected, 50,50);
}