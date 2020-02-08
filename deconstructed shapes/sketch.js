let r;

function setup() {
  createCanvas(800, 800);
  let r = 150;

}

function draw() {
  r = mouseX;

  colorMode(HSB);

  background(220, 50, 210);


  fill(90, 100, 50);
  for (let t = 0; t < 360; t = t + 2) {
    d = radians(t);
    let x = width / 2 + r / sin(d) + random(0, 15);
    let y = height / 2 + r / cos(d) + random(0, 15);


    strokeWeight(4);
    stroke(10);
    ellipse(x, y, random(0, 100), y);
    ellipse(x, y + 3, x, random(0, 100));

    noStroke();
    ellipse(x, y, random(70, 100), random(70, 100));
    ellipse(x, y, random(0, 150), random(0, 150));



  }
}