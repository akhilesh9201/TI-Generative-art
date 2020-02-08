let rx,ry;
function setup() {
  createCanvas(400, 400);
  rx= width/2;
  ry= height/2;
  step=2;
  fill(0);
}

function draw() {
  background(220,10);
let x = random(-step,step);
let y = random(-step,step);

  rx+=x;
  ry +=y;

ellipse(rx,ry,5,5)

line(rx,height/2,rx,y);
}