let pic1,pic2,pic3,pic4,f;
let state = 0 ;
let mic;
let vol;
let timer = 0 ;
let x = 500 ;

function setup() {
  createCanvas(600, 600);
  f = loadFont("assets/WashYourHand.ttf");
  pic1 = loadImage("assets/1-01.png");
  pic2 = loadImage("assets/2-02.png");
  pic3 = loadImage("assets/3-03.png");
  pic4 = loadImage("assets/boat.png");
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  textFont(f);
  vol = mic.getLevel();
  switch (state) {

case 0:
  background(127,255,170);
  textSize(20);
  text("Dragon Boat Festival",215,80);
  textSize(15);
  timer++;
  text(timer,30,590);
if(timer > 100){
  text("The festival commemorates Qu Yuan,a minister in the servive of the Chu Emperor.",50,200);
  }
if(timer > 200){
  text("Townspeople jumped into their boats and tried in vain to save him.",50,250);
  }
if(timer > 300){
  text("Despairing over corruption at court,Qu threw himself into a river.",50,300);
  }
if(timer > 400){
  text("Then,hoping to distract hungry fish from his body,the people scattered rice on the water.",50,350);
  }

if(timer > 600){
state = state + 1;
    }

break;

case 1:
  clear();
  background(127,255,170);
  textSize(10);
  text(x,30,590);
  textSize(20);
  text("Dragon boat racing",215,80);
  image(pic4,x,100,400,400);
  x = x - 1;
if(x < - 350){
  state =  state + 1;
}
break;

case 2:
  clear();
  background(127,255,170);
  textSize(15);
  text(vol.toFixed(3), 555,590);
  text("blowing to open the dumpling ",200,500);
if (vol > .001) {
  image(pic2,300,100,300,300);
  image(pic3,10,100,300,300);
  textSize(50);
  text("Rice Dumpling",155,80);
  }
else{
    image(pic1,150,100,300,300);
    textSize(20);
    text("Rice Dumpling",225,80);
  }
  break;
}

}

function mouseReleased() {
  state++;state==2
if (state > 2)
state = 0;
timer = 0;
x = 500;
}

function touchStarted() {
  getAudioContext().
  resume();
}
