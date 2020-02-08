function setup() {
  createCanvas(400, 400);
  
 for (let j = 0; j < height; j=j+10) {
    for (let i = 0; i < width; i=i+10) {
      let r=map(i,0,width,0,360);
      let q=map(j,0,height,0,200);
      fill(q,145,130,r);
    ellipse(i,j, q,r);
    
    }}
}
