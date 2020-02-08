function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);
  fill(200, 128);
  drawCirc(width / 2, height / 2, width); //calls the drawCirc function
}

function drawCirc(xPos, yPos, dia) {
  //draw ellipse at xPos, yPos of diameter dia
  ellipse(xPos, yPos, dia, dia);

  //checking condition for reducing diameters
  //change this number to reduce number of circles for clarity in analysing
  if (dia > 5) {
    //call drawCirc to draw 2 more circles, of half the diameter at the 1/4 and 3/4 positions along the current  
    drawCirc(xPos - dia / 2, yPos, dia / 2);
    drawCirc(xPos + dia / 2, yPos, dia / 2);


    fill(90, 50, 60);
    drawCirc(yPos - dia / 2, xPos, dia / 2);
    drawCirc(yPos + dia / 2, xPos, dia / 2);
  }
}