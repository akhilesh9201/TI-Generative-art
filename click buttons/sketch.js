let btClick;
let slSize;
let colSize;

function setup() {
  createCanvas(400, 400);
  btClick = createButton("Click me");
  slSize = createSlider(5, 45);
  colSize= createSlider(0,400);
  // colorMode(HSB);
}


function draw() {
  background(220, 10);
 
  let tx = slSize.value();
  let col=colSize.value();
    btClick.mouseClicked(clickFn);

  textSize(tx*5);
  
  noStroke();
  fill(col,100,150,120)
  ellipse(100,100,150,150);
  // textSize(tx);
  text("Clicked", random(0, width),
    height / 2);

  
textSize(slSize.value()); 
}
function clickFn() {
  text("Clicked", random(0, width),
    height / 2);
}