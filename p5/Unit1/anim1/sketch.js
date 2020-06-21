var x = 0 ;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(100);
  text("Hello",x,200);
  x =  x + 2;

  if(x > width){
    x = 0;
  }
}
