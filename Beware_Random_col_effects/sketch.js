let p;
function setup() {
  createCanvas(400,800);
  p=0;
  l=5;
}

function draw() {
  background (random(0,220),(100,160));
  let w=55;
  let h=80;
  fill (random(0,140),(0,90));
  rect(p,height/2-h/2,w,h);
  p=p+l;
  if(p>width-w)
  {l=-l;}
  if (p<0)
  {l=-l;}
}