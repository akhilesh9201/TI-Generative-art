let c,d;
function setup() {
  createCanvas(640, 4800);
  c=0;
  d=1;
}

function draw() {
  
  for (i = 0; i < 10; i++)
 for (p = 0; p < 260; p++)
    if (mouseIsPressed) {
    fill(120+20*p,50,50);
  } else {
    fill(c);
  }
  if (mouseIsPressed){
    fill(c);
  } else{
    fill (255-c);
  }
triangle(mouseX, 58,mouseY, 2000, 86, 75);
  // rect(mouseX,mouseY,80,80,20);
  c=c+d;
  if(c>255){
 d=-d;
    c=c+d;
  }
  
}
