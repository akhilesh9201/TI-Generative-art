let p=0;
let f=400;
function setup() {
  createCanvas(400,400);
}

function draw() {
  background (100,250,36,220);
  stroke (random(0,242),(0,1));
  let w = 55;
  let h = 80;
  fill (random(220),(0,250));
  rect(p,height/2-h/2,w,h);
  p=p+2;
  if( p> width-w) 
  {
    rect(f,height/2-h/2,w,h)
    f = f -2;
  }
}