//Simple Fibonacci series generator

function setup() {
  createCanvas(600, 600);
  fill(100, 120, 150, 100);
  series(0, 1); //starting nos
}

function draw() {
  background(9000,100,2500,1);
}


function series(a, b) {
  fill(200,150,150);
  ellipse(b, height / 2, b, b); //x loc, dia are fibo nos
  if (b < width / 2) //allow until max size
  {
    series(b, a + b); //core logic
  }
}