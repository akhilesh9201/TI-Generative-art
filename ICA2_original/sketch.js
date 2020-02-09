let r;
var mic;


function setup() {
  createCanvas(900, 900);

  frameRate(12);
  let r = 150;

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  r = mouseX;

  // colorMode(HSB);

  background(120, 49, 162);

  var vol = mic.getLevel();


  fill(90, 100, 50);
  for (let t = 0; t < 360; t = t + 2) {
    d = radians(t);
    let x = width / 2 + r / sin(d) + random(0, 1);
    let y = height / 2 + r / cos(d) + random(0, 1);


    strokeWeight(4);
    stroke(10);
    rect(x + 3, y, vol * 2000, vol * 2000, 40);

    rect(x, y + 3, vol * 2000, vol * 2000, 40);

    {
      if (vol * 2000 > 50)
        fill(100, 123, 159);

      if (vol * 2000 > 75)
        fill(149, 176, 120);

      if (vol * 2000 > 100)
        fill(59, 58, 125);

    }
    console.log(vol);

  }

}