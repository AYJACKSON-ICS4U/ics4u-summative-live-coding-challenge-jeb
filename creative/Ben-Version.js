let cube; 
let newCube;
let ma;
let maxD;
  
function setup() {
  createCanvas(400, 400, WEBGL);
  cube = new Cube(50, -270, 300, 900);
  newCube = new Cube(20, -270, 800, 900);
  ma = atan(sin(QUARTER_PI));
  maxD = dist(0, 0, 100, 100);
}

function draw() {
  background(100);
  ortho(-500, 1200, 500, -1200, 0, 1000);
  rotateY(ma);
  rotateX(QUARTER_PI);
  //rotateY(mouseY);
  //rotateX(mouseX);
  cube.move();
  cube.display();
  newCube.move();
  newCube.display();
}

  class Cube {
    constructor(w, x, y, z){
      this.angle = x;
      this.w = w;
      this.x = x;
      this.y = y;
      this.z = z;
    }
  
    move() {
      this.angle -= 0.09;
  }

  
  display() {
    for (let z = 0; z < height; z += this.w) {
    for (let x = 0; x < width; x += this.w) {
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = this.angle + offset;
      let h = floor(map(cos(a), -1, 1, 300, 600));
      translate(x - width + this.y, this.y - 10, z - height / 2 + this.x);
      normalMaterial();
      box(this.w, h, this.w);
      pop();
      }
    } 
  } 


}
