var cars = [];
var car1s = []
var car2s = []


var player;
var state = 0;
var timer = 0;
//let music;
var ice1;
var ice2;
var donut;
var playerImage;
var win,lose;
//var backgroundImage;

function preload() {
  //soundFormats("");
  //music = loadSound("");
  ice1 = loadImage("assets/icecream1.png");
  ice2 = loadImage("assets/icecream2.png");
  donut = loadImage("assets/donut.png");
  playerImage = loadImage("assets/young.jpg");
  win = loadImage("assets/win.jpg");
  lose = loadImage("assets/lose.jpg");

  //backgroundImage=loadImage("")

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  imageMode(CENTER);
}

function draw(){
  background('black');
  //background(backgroundImage);

  switch (state) {
    case 0:
      buildText("You should hold yourself", "By:KIMI \n\n\n Keep yourself passing the summer \n\n\n (click to continue)");

      if (mouseIsPressed) {
        startGame();
      }
      break;

    case 1:
      manageMovement();

      timer -= 1/60;

      fill("white");
      textSize(24);
      text("" + round(timer),50,50);
      if (timer <= 0) {
      state = "win"
      }
      break;

    case "win":
    buildText("YOU WON", "You successfully lose your weight)");
    image(win,displayWidth/2,displayHeight/3+200,displayWidth/4,displayHeight/4);
      if (mouseIsPressed) {
        state = 0;
      //isGameSet = false;
      }
      break;

    case "lose":
      buildText("YOU LOST", "You become a pig\n\n\n (click to restart)");
      image(lose,displayWidth/2,displayHeight/3+200,displayWidth/4,displayHeight/4);
      if (mouseIsPressed) {
        state = 0;
        //isGameSet = false;
      }
      break;
  }
}

// Player Constructor
function Player(){
  this.position = createVector(width/2,height/2);
  this.size = 80;
  this.speed = 10;


  this.update = function(){
    fill("white");
    this.velocity = createVector(0,0);
    if (keyIsDown(LEFT_ARROW))
    {
      this.velocity.x = -1*this.speed;
    }
    else if (keyIsDown(RIGHT_ARROW))
    {
      this.velocity.x = 1*this.speed;
    }

    if (keyIsDown(UP_ARROW))
    {
      this.velocity.y = -1*this.speed;
    }
    else if (keyIsDown(DOWN_ARROW))
    {
      this.velocity.y = 1*this.speed;
    }
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.x < 0 - this.size/2)  {this.position.x =width + this.size/2;}
    else if (this.position.x > width + this.size/2) {this.position.x = 0 -this.size/2;}
    else if (this.position.y < 0 - this.size/2) {this.position.y =height + this.size/2;}
    else if (this.position.y > height + this.size/2) {this.position.y = 0 -this.size/2;}

    image(playerImage,this.position.x,this.position.y,this.size,this.size);
    // circle(this.position.x,this.position.y,this.size);
  }
}


function Car(){
  this.accelerant = 0;
  this.color = createVector(random(255),random(255),random(255));

  this.size = random(30,70);
  this.position = createVector(random(5 + this.size/2, width - 5 -  this.size/2),random(5 + this.size/2, height - 5 -  this.size/2));
  this.velocity = createVector(random(-3,3),random(-3,3));


  this.update = function(){
    fill(this.color.x,this.color.y,this.color.z);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.x < 0 - this.size/2)  {this.position.x =width + this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant += .3;}
    else if (this.position.x > width + this.size/2) {this.position.x = 0 -this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant+= .3;}
    else if (this.position.y < 0 - this.size/2) {this.position.y =height + this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant+= .3;}
    else if (this.position.y > height + this.size/2) {this.position.y = 0 -this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant+= .3;}
    if (this.accelerant >= 30 && random(100) >90) {
      this.accelerant = 0;
    }
    image(ice1,this.position.x,this.position.y,this.size,this.size);
  }
}

function Car1(){
  this.accelerant = 0;
  this.color = createVector(random(255),random(255),random(255));

  this.size = random(30,70);
  this.position = createVector(random(5 + this.size/2, width - 5 -  this.size/2),random(5 + this.size/2, height - 5 -  this.size/2));
  this.velocity = createVector(random(-3,3),random(-3,3));


  this.update = function(){
    fill(this.color.x,this.color.y,this.color.z);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.x < 0 - this.size/2)  {this.position.x =width + this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant += .3;}
    else if (this.position.x > width + this.size/2) {this.position.x = 0 -this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant+= .3;}
    else if (this.position.y < 0 - this.size/2) {this.position.y =height + this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant+= .3;}
    else if (this.position.y > height + this.size/2) {this.position.y = 0 -this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant+= .3;}
    if (this.accelerant >= 30 && random(100) >90) {
      this.accelerant = 0;
    }
    image(ice2,this.position.x,this.position.y,this.size,this.size);
  }
}

function Car2(){
  this.accelerant = 0;
  this.color = createVector(random(255),random(255),random(255));

  this.size = random(30,70);
  this.position = createVector(random(5 + this.size/2, width - 5 -  this.size/2),random(5 + this.size/2, height - 5 -  this.size/2));
  this.velocity = createVector(random(-3,3),random(-3,3));


  this.update = function(){
    fill(this.color.x,this.color.y,this.color.z);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.x < 0 - this.size/2)  {this.position.x =width + this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant += .3;}
    else if (this.position.x > width + this.size/2) {this.position.x = 0 -this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant+= .3;}
    else if (this.position.y < 0 - this.size/2) {this.position.y =height + this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant+= .3;}
    else if (this.position.y > height + this.size/2) {this.position.y = 0 -this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant+= .3;}
    if (this.accelerant >= 30 && random(100) >90) {
      this.accelerant = 0;
    }
    image(donut,this.position.x,this.position.y,this.size,this.size);
  }
}

// moves cars & Player
function manageMovement(){
  player.update();

  for (var i = 0; i < cars.length; i++) {
    cars[i].update();

    if (cars[i].position.dist(player.position) < player.size*.5 + (cars[i].size*.6)) {
      state = "lose";
    }
  }

  for (var i = 0; i < car1s.length; i++) {
    car1s[i].update();

    if (car1s[i].position.dist(player.position) < player.size*.5 + (car1s[i].size*.6)) {
      state = "lose";
    }
  }

  for (var i = 0; i < car2s.length; i++) {
    car2s[i].update();

    if (car2s[i].position.dist(player.position) < player.size*.5 + (car2s[i].size*.6)) {
      state = "lose";
    }
  }
}

//builds a generic scene with a title and a subtitle
function buildText(textTitle,textMessage){
  fill("white");
  textSize(72);
  textAlign(CENTER, CENTER);
  text(textTitle,width/2,height/3);
  textSize(32);
  text(textMessage,width/2,height/2+200);
}

//builds everything and starts the game
function startGame(){
  //if (!music.isPlaying()) {

    //music.play();
  //}
  cars = [];
  for (var i = 0; i < 15; i++) {
    cars.push(new Car());
  }

  car1s = [];
  for (var i = 0; i < 15; i++) {
    car1s.push(new Car1());
  }

  car2s = [];
  for (var i = 0; i < 15; i++) {
    car2s.push(new Car2());
  }
  player = new Player();
  //isGameSet = true;
  timer = 10;
  state++;
}
/* LET'S PLAN
4. introduce a menu that you must click through to start the game
5. introduce a win if you destroy all the cars
6. create a win screen that you go to if you win
7. introduce a timer that if you don't catch all the boxes you will lose
8. create a lose screen

*/
