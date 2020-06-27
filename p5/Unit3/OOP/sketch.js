var img1;
let cars = [] ;
let angle, px, py;

function setup() {
  createCanvas(500, 500);
  noStroke();
  imageMode(CENTER);
  img1 = loadImage("assets/avicii.jpg");

//for(let i = 0; i < 40; i++) {
  //cars.push(new Car());
//}


}

function draw() {
  image(img1,250,250,500,500)
  cars.push(new Car());


for(let i = 0; i < cars.length; i++) {
  cars[i].display();
  cars[i].update();

  if(cars[i].a <= 0){
    cars.splice(i,1);
  }
}
}

class Car{

constructor(){
  this.pos = createVector(width/2,height/2+60);
  this.vel = createVector(random(-1.5,1.5),random(-6,-3));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.a = random(200,255);
  this.size = random(10,30);
}

display(){
  fill(this.r,this.g,this.b,this.a);
  ellipse(this.pos.x,this.pos.y,this.size)
}

update(){
  this.pos.add(this.vel);
  this.a = this.a - 5;
  //if(this.pos.x > width)this.pos.x = 0;
  //if(this.pos.x < 0)this.pos.x = width;
  //if(this.pos.y > width)this.pos.y = 0;
  //if(this.pos.y < 0)this.pos.y = height;

}
}
