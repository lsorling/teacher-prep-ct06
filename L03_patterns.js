let colorValue = 0;

function setup() {
    createCanvas(600, 400);
    background(220);
    // note this line here
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
  // for ( let i=0; i<5; i++ ) {
  //   fill(0,i*55,0);
  //   circle(i*100+70,200,80);
  // }

  // Task 1: Colour Gradient
  // let mycolor = 0;
  // noStroke();
  // for ( let i=0; i<38; i++ ) {
  //   fill(0,0,mycolor);
  //   rect(15+i*15,50,15,80);
  //   mycolor = mycolor +7;
  // }
  // Task 2: Colour Loop
  // fill(colorValue,0,255);
  // colorValue = colorValue + 1;
  // circle(150, 150, 100);

  // Task 3: Row of Circles
  let diameter = 50;
  let spacing = 5;
  let count = width/ (diameter+spacing);
  count -= 2;
  
  // for (let i=0; i<count; i++) {
  //   circle((0.5*diameter)+spacing+i*(diameter+spacing), 200, diameter);
  // }
  // Task 4: Grid of Circles
  let rows = height/ (diameter+spacing)
  let posX = 0;
  let posY = diameter/2;

  for (let r1=0; r1<rows; r1++) {
    posX = diameter/2;
    for (let i=0; i<count; i++) {
      circle(posX, posY, diameter);
      posX = posX + diameter + spacing;
    } 
    text("posY is "+posY, posX, posY);
    // why is posY changed here
    posY = posY + diameter + spacing;
    console.log("posY is " + posY);
  }

  // lesson 3 is confusing
  // bcos for loop
  // we uses noLoop in the setup() function
  // yet
  // suddenly jump to draw() for variable changing variable value using simple equation
  // and variable

}