let p;
let a;

let r;
var mic;


function setup() {
  createCanvas(900, 900);
 
  frameRate(12);
 // frameRate(6);
  let r = 150;
  
  p = 0;
  a = -1;

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  r = mouseX;

  // colorMode(HSB);

  background('green');

  var vol = mic.getLevel();


  fill('orange');
  for (let t = 0; t < 360; t = t + 2) {
    d = radians(t);
    let x = width / 2 + r / sin(d) + random(0, 0.5);
    let y = height / 2 + r / cos(d) + random(0, 0.5);


    strokeWeight(4);
    stroke(10);
    rect(x + 3, y, vol * 2000, vol * 2000,40);
    p=p+a;
    
    rect(x, y + 3, vol * 2000, vol * 2000,40);
    p=p+a;
    
    {
      if (vol * 2000 > 50)
        fill(100,123,159);

      if (vol * 2000 > 75)
        fill(149,176,120);

      if (vol * 2000 > 100)
        fill(59,58,125);

    }
    console.log(vol);

    // noStroke();
    // ellipse(x, y, random(70, 100), random(70, 100));
    // ellipse(x, y, random(0, 150), random(0, 150));


  }

}


