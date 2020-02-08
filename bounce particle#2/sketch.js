let p;
let q;

function setup() {
  createCanvas(600, 600);

  p = new Particle();
  q = new Particle();

}

function draw() {
  background(220);
  p.display();
  q.display();
  p.update();
  q.update();

  // ellipse(p.posX, p.posY, 100)
  // ellipse(p.posX, p.posY, 50)

}
class Particle {
  constructor() {
    this.posX = (random(0, width));
    this.posY = (random(0, height));
    this.rad = (random(0, 50));
    this.velX = random();
    this.velY = random();
  }
  display() {
    fill(50, 20, 70)
    ellipse(this.posX, this.posY, this.rad);
   
    noFill();
    rect(this.posX, this.posY, this.rad, 40);

    fill(90,50,70);
    triangle(this.posX, this.posY, this.rad, this.posY, this.rad, this.posX);
  }
  // if ()

  update() {
    this.posX += this.velX;
    this.posY += this.velY;
    if (this.posX > 600) {
      this.velX--;
    }
    if (this.posY > 600) {
      this.velX--;
    }
    if (this.posX < 0) {
      this.velX++;
    }
    if (this.posY < 0) {
      this.velY++;
    }


  }
}