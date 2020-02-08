let p;
let a;

function setup() {
  createCanvas(600, 600);
  p = 0;
  a = 1;

}

function draw() {
  background(220, 100, 20);
  let w = 50;
  let h = 100;



  w = 150
  h = 150

  if (keyIsPressed === true) {
    p = p + 2
  } else(p = p - 2);

  {
    if (p > 200) {
      background(80, 50, 100, 100)
    } else {
      background(25, 0, 50, 0)
    }
  }
  noStroke();

  colorMode(HSB);
  fill(0, 30, 180, 150);
  triangle(p, p / 2, p, p, w, p);

  strokeWeight(9);
  stroke(5);
  fill(50, 160, 90, 100);
  ellipse(p, w / 2, p / 2, p);

  noStroke();
  fill(0, 200, 0, 190);
  rect(p, 100, p, 200);
  
  strokeWeight(40);
  stroke(50);
  fill(70,0,200, 190);
  rect(100,p,p,p,60);



  p = p + a; {
    if (p > width - w)
      a = -1;
  } {
    if (p < 0)
      a = 1

  }

}