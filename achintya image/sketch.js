let img;
function preload()
{
  img=loadImage('chintesh.jpg');
}
 
function setup(){
  img.resize(0,800);
  createCanvas(img.width,img.height);
// image(img,0,0);
  
frameRate(1000);
  }

function draw() {
  // background(220);
let x = random(0,width);
let y = random(0,height);
let col = img.get(x,y);
noStroke();
  fill(col);
  // noStroke();
ellipse(x,y,5,5);}