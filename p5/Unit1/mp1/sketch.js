var a,b,c;
var x=25;
var s=20

function setup() {
  createCanvas(500, 500);
  strokeCap(ROUND);
  strokeJoin(ROUND);
  strokeWeight(5);
}

function draw() {

  background(152,245,255);
  a=random(0,255);
  b=random(0,255);
  c=random(0,255);

  x=x+1;
if(x>335){
  x=25;
}

   s=s+0.1;
if(s>50){
  s=20;
}

if (mouseIsPressed) {

  textSize(50);
  fill(a,b,c);
  text("Delicious", 130, 100);

  fill(b,c,a);
  arc(100, 250, 150, 150,PI+QUARTER_PI/2  , PI - QUARTER_PI/2, PIE);

  fill(0);
  ellipse(80, 200, 10,10);

  fill(250,245,a);
  rect(25, 325, 450,150 , 10);

  textSize(s);
  fill(c,a,b);
  text("Greedy beans",150,400)

} else {
  fill(72,61,139);
  arc(mouseX, mouseY, 150, 150,PI + QUARTER_PI , PI - QUARTER_PI, PIE);

  fill(0);
  ellipse(mouseX-20, mouseY-50, 10,10);

  fill(106,90,205);
  ellipse(275, 250, 100,100);

  fill(123,105,238)
  ellipse(187.5, 250, 75,75);

  fill(132,112,255)
  ellipse(125, 250, 50,50);

  textSize(30);
  fill(0);
  text("Eat them",180,100);

  fill(250,245,205);
  rect(25, 325, 450,150 , 10);

  textSize(20);
  fill(c,a,b);
  text("Greedy beans",x,400)

  print("Greedy beans");

}

  fill(0);
  textSize(10);
  text(mouseX + ", " + mouseY, 10, 20);
}
