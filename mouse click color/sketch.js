function setup() {
  createCanvas(600, 4800);
}

function draw() {  
  {
    if (mouseIsPressed) {
    fill(120,20,50);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
  for( let i=0;i<10;i++)
  {
    ellipse(100+50*i,100,80,80);
  }
}