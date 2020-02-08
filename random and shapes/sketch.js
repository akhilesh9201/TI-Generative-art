function setup() {
  createCanvas(4800, 4800);
  p = 0;
  l = 5;
  frameRate(5)
}

function draw() {

  for (i = 0; i < 10; i++)


  {
    noStroke();
    ellipse(100 + 100 * i, 100, 80, 80);
    rect(100 + 100 * i, 100, 80, 80, 20);
    ellipse(100 + 100 * i, 150, 80, 80);
    rect(100 + 100 * i, 150, 80, 80, 20);
    ellipse(100 + 100 * i, 200, 80, 80);
    rect(100 + 100 * i, 200, 80, 80, 20);
    ellipse(100 + 100 * i, 200, 80, 80);
    rect(100 + 100 * i, 200, 80, 80, 20);
    ellipse(100 + 100 * i, 250, 80, 80);
    rect(100 + 100 * i, 2500, 80, 80, 20);
    fill(random(250, 30, 66));
    // fill((0,200+20*i,50),(0,50.60));
    // fill(80,+70*i,70);
  }
}