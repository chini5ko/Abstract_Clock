// const { translator } = require("./p5");
let m;

function setup() {
  createCanvas(800, 600); // make an HTML canvas element width x height pixels

  angleMode(DEGREES);
}

function draw() {
  // print minute
  if (m != minute()) {
    m = minute();
    console.log(`${m} minutes`);
  }

  // it draws New York City
  drawBackground();

  // trian lines opacity
  let backgroundOpacity = 55;
  let fillOpacity = 150;

  //purple line, hours
  fill(180, 0, 180, backgroundOpacity);
  rect(130, 265, 360, 23, 10);
  push(); // start translate
  translate(488, 288);
  rotate(-120);
  rect(0, 0, 25, 360, 10);
  pop();

  //red line, sec
  fill(239, 0, 0, backgroundOpacity);
  rect(95, 0, 25, 250, 10);
  push(); // start translate
  translate(95, 250);
  rotate(-25);
  rect(0, 2, 25, 250, 10);
  pop();

  //green line, minutes
  fill(1, 144, 74, backgroundOpacity);
  rect(310, 0, 25, 250, 10);
  push(); // start translate
  translate(310, 241);
  rotate(19);
  rect(0, 2, 25, 250, 10);
  pop();

  // purple line anuimation, hours *************************
  fill(180, 0, 180, fillOpacity);
  let h = hour();
  let maxWidth = 360;
  let purpleFill = (h * maxWidth) / 12;
  if (
    h <= 12
      ? rect(130, 265, purpleFill, 23, 10)
      : rect(130, 265, maxWidth, 23, 10)
  );

  push(); // start translate
  translate(488, 288);
  rotate(-120);

  purpleFill = ((h - 12) * maxWidth) / 12;
  if (
    h > 12 && purpleFill > 0
      ? rect(0, 0, 25, purpleFill, 10)
      : rect(0, 0, 25, 0)
  );
  pop();

  // red line animation, seconds *************************
  fill(239, 0, 0, fillOpacity);
  let s = second();
  let maxHeight = 250; // max height of the rectangle
  let redFill = (s * maxHeight) / 30;
  if (s <= 30 ? rect(95, 0, 25, redFill, 10) : rect(95, 0, 25, maxHeight, 10));
  //diagonal
  push();
  translate(95, maxHeight);
  rotate(-25);
  redFill = ((s - 30) * maxHeight) / 29;
  if (
    s > 30 && redFill > 0 ? rect(0, 2, 25, redFill, 10) : rect(0, 2, 25, 0, 10)
  );
  pop();

  // green line animation, minutes *************************
  fill(1, 144, 74, fillOpacity);
  m = minute();
  let greenFill = (m * maxHeight) / 29;
  if (
    m <= 30 ? rect(310, 0, 25, greenFill, 10) : rect(310, 0, 25, maxHeight, 10)
  );
  push();
  translate(310, 241);
  rotate(19);
  greenFill = ((m - 30) * maxHeight) / 29;
  if (
    m > 30 && greenFill > 0
      ? rect(0, 2, 25, greenFill, 10)
      : rect(0, 2, 25, 0, 10)
  );
  pop();
}

function drawBackground() {
  // Sea
  background(150, 194, 232);

  // Uptown
  fill(239, 227, 204);
  noStroke();
  rect(80, 0, 280, 320);

  // Downtown
  triangle(250, 580, 360, 320, 80, 320);

  // Queens
  rect(430, 0, 380, 320);

  // Roosevelt island
  rect(375, 70, 38, 180);

  // Brooklyn
  triangle(800, 670, 800, 280, 430, 350);
  triangle(820, 690, 480, 350, 300, 820);

  // Cetral park
  fill(158, 210, 174);
  rect(140, 25, 150, 200);
}
