let thesePpl = [];

function setup() {
  createCanvas(400, 400);

  //   person = new Student();
  // p2 = new Student();
  // p3 = new Student();
  for (let i = 0; i < 200; i++) {
    thesePpl[i] = new Student(i);
  }
  //   person.display();
  // p2.display();
  // p3.display();
}

function draw() {
  background(220);
  for (let i = 0; i < thesePpl.length; i++)
  {
    thesePpl[i].display();
    // let r = int(random(0, thesePpl.length - 1));

  }
}
class Student {
  constructor(a) {
    this.name = "AlphaBeta";

    this.address = a;
    this.number = int(random(-100, 100));
  }
  display() {
    print("name", this.name);
    print("address", this.address);
    print("roll number", this.number);
  }}