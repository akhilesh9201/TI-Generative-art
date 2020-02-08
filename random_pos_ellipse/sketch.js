let arr = [];

function setup() {
  createCanvas(400, 800);
  for (let i = 0; i < 10; i++) {
    arr[i] = random(0, 255);
    print(arr[i]);
  }
}

function draw() {
  background(255);
  noStroke();


  for (i = 0; i < 10; i++) {
    let c= arr[i];
    fill(255-c);
    ellipse(100 + i * 30, height/2 , arr[i] * 0.5, arr[i] * 0.5);
    
  }
}