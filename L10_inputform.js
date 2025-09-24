let bgColor;
let sliderBg;

function setup() {
    bgColor = 200;

    // create canvas
    createCanvas(800, 600);
    background(bgColor);

    //                      min, max
    sliderBg = createSlider(0, 255);
    sliderBg.position(width/2, height/2);
    sliderBg.value(bgColor);
}

function draw() {
    // now students can tell me
    // teacher you forget erase
    background();
    textSize(32);
    textAlign(RIGHT, CENTER);
    text("Background Colour:", width/2-10, height/2+10);

}