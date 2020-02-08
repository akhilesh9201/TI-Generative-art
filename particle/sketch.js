let bump;
let p;
let a;
let b;

function setup() {
  
  createCanvas(600, 600);
  p = new Particle();
  q = new Particle();
  
  // frameRate(10)
   a = 0;
  b= 1;

}

function draw() {
  background(10,215,170,130);
noStroke()
  
  p.display();
  q.display();
  p.update();
  q.update();
}

class Particle {
  constructor() {
    this.posX = (random(1, width));

    this.posY = (random(1, height));
    this.rad = (random(10, 55));
    this.velX = 5;
    this.velY = 5;
  }
  display() {
    // fill(90,80,100,60)
      rect(this.posX,this.posY,this.rad,this.posX,20);
    a=a-b;

    fill(10,100,180,190);
    ellipse(this.posX, this.posY, this.posY)
  }
  update() {
    this.posX += this.velX;
    this.posY += this.velY;
    if (this.posX > width) {
      this.velX = -this.velX
    }
    if (this.posY > height) {
      this.velY = -this.velY
    }
    if (this.posX < 0) {
      this.velX = -this.velX
    }
    if (this.posY < 0) {
      this.velY = -this.velY
    }
  }
}