let p;
let a;

let r;
var mic;

let xoff=0.0;

function setup() {
  createCanvas(800, 800);
 
  frameRate(10);
 // frameRate(6);
  let r = 150;
  
  // p = 0;
  // a = -1;

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  r = mouseX;

  colorMode(HSB);

  background(20,49,162);
  
  var vol = mic.getLevel();

  fill(90, 100, 50);
  for (let t = 0; t < 360; t = t + 2) {
    d = radians(t);
    let x = width / 2 + r / sin(d) + cos(d);
    let y = height / 2 + r / cos(d) + sin(d);

    xoff = xoff + 1;
  let n = noise(xoff) * height;
  // line(n, 0, n, height);


    strokeWeight(4);
    stroke(10);
    rect(x, y, vol*1000, width,40);
    // p=p+a;
    
    rect(x, y, vol*1000, width,40);
    // p=p+a;
    
    {
      if (vol * 2000 > 50)
        fill(10,23,59);

      if (vol * 2000 > 75)
        fill(149,176,150);

      if (vol * 2000 > 100)
        fill(12,140,200);

    }
    console.log(vol);

    // noStroke();
    // ellipse(x, y, random(70, 100), random(70, 100));
    // ellipse(x, y, random(0, 150), random(0, 150));


  }

}