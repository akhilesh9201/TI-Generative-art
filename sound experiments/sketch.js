let song;
let ran;

function preload() {
  soundFormats("mp3");
  bump = loadSound("LedZ.mp3")
}

function setup() {
  createCanvas(400, 400);
ran = false;
}

function draw() {
  background(220);
}

function mouseClicked() {
  bump.play();
} 

if ( ran== "true")
{
  let r = int(random(0, song.duration - 1));
  song.jump(r, 1);
}

function keyPressed() {
  if (key == "a") {
    bump.play();
  }


  if (key == "s") {
    bump.stop();

    if (key == "r") {
      bump.reverseBuffer();
      bump.play();
    }
  }
  function mouseClicked(){
    ran = !ran;}
}