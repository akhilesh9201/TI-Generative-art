A = 1;
B = 1;
let r;
var mic;
let easing = 0.05;


function setup() {
  createCanvas(900, 900);

  frameRate(12);

  let r = 150;

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let targetA = mouseX;
  let dA = targetA - A;
  A += dA * easing;

  let targetB = mouseY;
  let dB = targetB - B;
  B += dB * easing;

  // colorMode(HSB);

  background(128,128,128);

  var vol = mic.getLevel();


  fill(90, 100, 50);
  for (let t = 0; t < 360; t = t + 2) {
    d = radians(t);
    let x = width / 2 + r / sin(d) ;
    let y = height / 2 + r / cos(d);


    strokeWeight(4);
    stroke(10);
    rect(A, B, vol * 2000, vol * 2000, 40);
    rect(A, B, vol * 2000, vol * 2000, 40);
    
    {
      if (vol * 2000 > 50)
        fill(100,13,158);

      if (vol * 2000 > 75)
        fill(120,200, 150);

      if (vol * 2000 > 100)
        fill(255,0, 0);

    }
    console.log(vol);

    // noStroke();
    // ellipse(x, y, random(70, 100), random(70, 100));
    // ellipse(x, y, random(0, 150), random(0, 150));


  }

}