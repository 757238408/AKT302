let cars = []; // an array for the objects
let frogPos;

function setup() {
  createCanvas(windowWidth, windowHeight);

  frogPos = createVector(width / 2, height - 120);

  // spawn the objects
  for (let i = 0; i < 10; i++) {
    cars.push(new Car()); // put the objects onto the cars array
  }
}


function draw() {

  background('white');

  // iterate through the array, display them, update them
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].update();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1) ;
    }
  }

  // draw a "frog" here
  fill('green');
  ellipse(frogPos.x, frogPos.y, 70, 70);
      checkForKeys();
  frogPos.x = mouseX;
  frogPos.y = mouseY;

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARRROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

}


// this is the Car class!
class Car {
  constructor() {
    // attributes
    this.pos = createVector(width / 2, height / 2); // where it starts
    this.vel = createVector(random(-3, 3), random(-3, 3)); // direction
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(255);

  }

  // methods

  display() { // this displays the object
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, 30, 30);
    // image(img1, this.pos.x, this.pos.y, 100, 100) ;
  }

  update() { // this moves the object
    this.pos.add(this.vel); // add the velocity to the position

    // loop the objects around the screen
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}
