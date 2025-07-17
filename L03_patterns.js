function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  mycolor = 255;
  // Recap 1: Repeating Circles
  for ( let i=0; i<5; i++ ) {
    fill(i*55);
    circle(i*100+70,200,80);
    mycolor = mycolor -35;
  }
  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}