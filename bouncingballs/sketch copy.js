let p;
function setup() {
  createCanvas(500, 500);
  p=0;
}

function draw() {
  background(220);
//   if (mouseIsPressed) { 
//     fill(0);
//   } else {
//     fill(160,80,100.50);
//   }{
//   ellipse(mouseX, mouseY, 80, 80);
// }

  
  let w=75;
  let h= 100;
  rect(80,p,p,p);
  
  if (p != 500-p)
  {
    p = p + 5;
  }
  
}