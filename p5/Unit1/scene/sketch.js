function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(152,245,255);
  noStroke();

  fill(72,61,139)
  arc(400, 250, 150, 150,PI + QUARTER_PI , PI - QUARTER_PI, PIE);

  fill(106,90,205);
  ellipse(275, 250, 100,100);

  fill(123,105,238)
  ellipse(187.5, 250, 75,75);

  fill(132,112,255)
  ellipse(125, 250, 50,50);

  fill(250,245,205)
  rect(25, 325, 450,150 , 10);

  fill(0);
  ellipse(380, 200, 10,10);

  print("Greedy beans");

}
