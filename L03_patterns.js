function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
  // for ( let i=0; i<5; i++ ) {
  //   fill(0,i*55,0);
  //   circle(i*100+70,200,80);
  // }

  // Task 1: Colour Gradient
  let mycolor = 0;
  noStroke();
  for ( let i=0; i<38; i++ ) {
    fill(mycolor/2,0,mycolor);
    rect(15+i*15,50,15,80);
    mycolor = mycolor +7;
  }
  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}