let bgColor;
let textColor;
let sliderBg;
let textColorPicker;

function setup() {
    bgColor = 200;

    // create canvas
    createCanvas(800, 600);
    background(bgColor);

    //                      min, max
    sliderBg = createSlider(0, 255);
    sliderBg.position(width/2, height/2);
    sliderBg.value(bgColor);

    textColorPicker
}

function draw() {
    // now students can tell me
    // teacher you forget erase
    bgColor = sliderBg.value();
    background(bgColor);

    textSize(32);
    textAlign(RIGHT, CENTER);
    if (bgColor < 50) {
        fill("white");
    }
    else {
        fill("black");
    }
    text("Background Colour:", width/2-10, height/2+10);
    text("Text Colour:", width/2-10, height/2+50);

}