let cars = [];
let player;
let x,y;
var ice1,ice2,donut,pig,state;


function preload() {
  ice1 = loadImage("assets/icecream1.png");
  ice2 = loadImage("assets/icecream2.png");
  donut = loadImage("assets/donut.png");
  pig = loadImage("assets/pig.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight);
}

function draw(){
  background('black');

  switch (state) {
    case 0:
      fill('white');
      Text("By: Kimi \n Eat your faviour food, avoid what you do not want to eat. \n (click to play)",width/2,height/2);

      if (mouseIsPressed) {
        startGame();
      }
    break;

    case "game":

    break;

    case "win":
    Text("YOU WON",width/2,height/2-200);
      if (mouseIsPressed) {
        currentScene = 0;
        isGameSet = false;
      }
      break;

    case "lose":
    Text("YOU LOST", width/2,height/2-200);
    if (mouseIsPressed) {
        currentScene = 0;
        isGameSet = false;
      }
    break;
  }
}

// Player Constructor
function Player(){
  this.position = createVector(width/2,height/2);
  this.size = 40;
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

    image(pig,this.position.x,this.position.y,this.size,this.size);
    // circle(this.position.x,this.position.y,this.size);
  }
}

// Car Constructor
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
  }
}


// moves cars & Player
function manageMovement(){
  player.update();

  for (var i = 0; i < cars.length; i++) {
    cars[i].update();

    if (cars[i].position.dist(player.position) < player.size*.5 + (cars[i].size*.6)) {
      currentScene = "lose";
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
  text(textMessage,width/2,height/2,width/2,height/2);
}

//builds everything and starts the game
function startGame(){
  if (!music.isPlaying()) {

    music.play();
  }
  cars = [];
  for (var i = 0; i < 25; i++) {
    cars.push(new Car());
  }
  player = new Player();
  isGameSet = true;
  timer = 30;
  currentScene++;
}
