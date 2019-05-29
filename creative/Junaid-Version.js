let cube1; 
let cube2;
let ma;
let maxD;
  
function setup() {
  createCanvas(400, 400, WEBGL);
  cube1 = new Cube(25,-100,800,900);
  cube2 = new Cube(35,0,200,0);
  ma = atan(1);
  maxD = dist(0, 0, 200, 200);
}

function draw() {
  background(100);
  ortho(-500, 1200, 500, -1200, 0, 1000);
  rotateX(mouseX / 2);
  rotateY(ma);
  rotateX(QUARTER_PI);
  rotateY(mouseY / 2);
  rotateZ(-QUARTER_PI)
  cube1.move();
  cube1.display();
  cube2.move();
  cube2.display();
}

class Cube {
  constructor(w,x,y,z){
    this.angle = x;
    this.w = w;
    this.x=x;
    this.y=y;
    this.z=z;
  }
  
  move() {
    this.angle -= 0.1;
  }
  
  display() {
    for (let z = 0; z < height; z += this.w) {
    for (let x = 0; x < width; x += this.w) {
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = this.angle + offset;
      let h = floor(map(sin(a), -1, 1, 100, 300));
      translate(x - width / 2+this.z, this.y - 250, z - height / 2 + this.x);
      normalMaterial();
      box(this.w, h, this.w);
      pop();
      }
    } 
  } 
}
