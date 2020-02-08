let img;

function preload() {
  img = loadImage('transition.png');
}

function setup() {
  img.resize(0, 800);
  createCanvas(img.width, img.height);
  // image(img,0,0);


}

function draw() {
  // background(220);
  let x = random(0, width);
  let y = random(0, height);
  let col = img.get(x, y);
  // noStroke();
  // fill(col);
  // noStroke();


  stroke(col);
  
  noFill();
  bezier(x, y, x, y, 0, 100, 100, 100);
 bezier(y,y, x, y, 0, 100, 100, 100);

}