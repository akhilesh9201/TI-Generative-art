// let p;
// let a;

var smoothedSensor = 0;
let r;
var mic;


function setup() {
  createCanvas(800, 800);

  frameRate(11);
  // frameRate(6);
  let r = 150;
  
  // p = 0;
  // a = -1;

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  r= mouseX;
  var sensor = mouseY;
  smoothedSensor = lerp(smoothedSensor, sensor, 0.001)


  colorMode(HSB);

  background(20, 49, 162);

  var vol = mic.getLevel();


  fill(90, 100, 50);
  for (let t = 0; t < 360; t = t + 2) {
    d = radians(t);
   let x = width / 2 + r / sin(d) ;
    let y = height / 2 + r / cos(d);


    strokeWeight(4);
    stroke(10);
    rect(x+3, y, vol * 200, vol * 2000*sensor, 40);
    // p=p+a;

    rect(x, y + 3, vol * 2000, vol * 2000*smoothedSensor, 40);
    // p=p+a;

    {
      if (vol * 2000*smoothedSensor > 50)
        fill(10, 23, 59);

      if (vol * 2000*smoothedSensor > 75)
        fill(149, 176, 150);

      if (vol * 2000*smoothedSensor > 100)
        fill(12, 140, 200);

    }
    console.log(vol);

    // noStroke();
    // ellipse(x, y, random(70, 100), random(70, 100));
    // ellipse(x, y, random(0, 150), random(0, 150));


  }

}