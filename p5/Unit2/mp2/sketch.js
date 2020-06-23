var myState = 0;
var myTimer = 0;
var font;
var x = 0;
var pic1;
let mic;
let y = 337;
var vol = 0;
var pic2;
var song1;

function preload() {
  font = loadfont('assets/HoboStd.otf');
  pic1 = loadImage('assets/a.jpg');
  pic2 = loadImage('assets/b.jpg');
  song1 = loadSound('assets/d.mp3')
}

function setup() {
  createCanvas(700, 400);
  mic = new p5.AudioIn();
  textFont(font);
  mic.start();
}

function draw() {
  image(pic1, 0, 0);
switch (myState) {

case 0:
  background("#ffcb08");
  image(pic1, 0, 0);
  fill("white");
  textSize(20);
  fill(random(255), random(255), random(255));
  textSize(30);
  text("zedd", x, 200);
      x += 3;
      if (x > 700) {
        x = 0;
      }
break;

case 1:
  background(100);
  image(pic1, 0, 0);
  myTimer++;
if (myTimer >= 10) {
  myTimer = 4;
  myState = 2;
}
  break;

  case 2:
  background(100);
  image(pic1, 0, 0);
  vol = mic.getLevel();
  if (vol >= 0.2) {
  myState = 3;
  song1.play();
}
  image(pic2, 312, 270);
  textSize(40);
  text("best dj", 150, 200);
break;

case 3:
  background(200);
  image(pic2, 312, y);
  y = y - 10;
if (y <= 0) {
  myState = 4;
  song1.stop();
}
break;

case 4:
  textSize(79);
  text("great voice", 244, 171);
  y = 337
  background("#ffcb08");
break;
  }
}

function mouseReleased() {
  if (myState == 0) {
    myState = 1;
  }
  if (myState == 2) {
  myState = 3;
  }


  if (myState == 4) {
    myState = 0;
  }

  print.log(mouseX + "," + mouseY);
}
function touchStarted() {
  getAudioContext().resume();
}
