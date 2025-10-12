// write your codes here
// teach array first
// teach pick random() one from the array
// then teach replace()
// but must assign back to the same variable
//
let templates = [
    "{noun} {verb} over the wall like humpy dumpy",
    "in Roblox, {noun} is {verb}ing",
    "{verb}ed, {noun} did it really well",
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