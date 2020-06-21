var x = 0 ;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(100);

  push();
  translate(x,0);
  ellipse(100,100,100,100);
  x++;
  pop();
}
