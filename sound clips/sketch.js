let bump;
let p;

function preload(){
  soundFormats("wav");
  bump = loadSound("hehe.wav");
  
function setup() {
  createCanvas(400, 400);
  p = new Particle();
  q = new Particle();
}

function draw() {
  background(212,122,123,12);
noStroke()
  
  p.display();
  q.display();
  p.update();
  q.update();
}
  
  function mouseClicked(){
    bump.play();
  }

class Particle {
  constructor() {
    this.posX = (random(1, width));

    this.posY = (random(1, height));
    this.rad = (random(1, 50));
    this.velX = random(1, 20);
    this.velY = random();
  }
  display() {
    //   triangle(this.posX,this.posY,this.rad,this.posX,this.posY,this.rad);

    ellipse(this.posX, this.posY, this.rad)
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
}}