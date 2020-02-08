// let p= -5;
let r;

function setup() {
  createCanvas(800, 800);
  series(500);
}

function series(n) {
  print(n);
  noStroke();
  fill(random(0,200),(0,200));
  ellipse(0,height/2,n,n);
  ellipse(width-n,height/2,n,n)
   ellipse(width/3,height/3,n,n)
   ellipse(width/4,height/4,n,n)
  ellipse(width/6,height/6,n,n)
  ellipse(width/7,height/3,n,n)
   ellipse(width/8,height/4,n,n)
  ellipse(width/9,height/6,n,n)
  if (n>5) {
    series(n/2);
        
    // rect(a+b,a+b,a+b,a+b,50)
  }
}