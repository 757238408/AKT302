let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {
    case 0:
    background('white');
    text("we are in 0",100,100);
    break;

    case 1:
    background('red');
    text("we are in 1",100,100);
    break;

    case 2:
    background('yellow');
    text("we are in 2",100,100);
    break;
  }
}

function mouseReleased(){
  state = state + 1;
if(state > 2){
  state = 0;
}
}
