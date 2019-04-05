// import { Vector } from "p5";

function Spiral(startx, starty, r, angle, increment, slots) {
  
  this.radius = r || 120;
  this.slots = slots || 10;
  this.increment = increment || 4;
  var angle = 0;
  //   this.baseVector = createVector(1, 1);
  //   var rotator = this.baseVector;
  //   console.log("basevec:", this.baseVector);
  //   console.log("vecDist:", this.vecDistance);
  console.log("slots:", this.slots);
  //   rotator = rotator.rotate(this.angle);
  //   console.log("rotator:", rotator);
  this.show = function() {
    // if (this.distance > this.radius) this.distance = 0;
    // this.distance = 0.2;
    // this.angle = angle || 0.1;
    // push();
    translate(startx, starty);
    // angle += 0.05;
    // rotate(angle);
    ellipse(0, 0, this.radius);
    // rotator = rotator.mult(this.vecDistance);
beginShape();
    var x = 2;
    var y = 3;
    for (var i = 0; i < this.slots; i++) {
      //   var x = this.distance * cos(this.angle);
      //   var y = this.distance * sin(this.angle);
      //   translate(rotator.x,rotator.y);
      ellipse(x, y, 5);
      x+=this.increment;
      y+=this.increment;
      //   this.distance += ((i * this.radius) / this.slots) * this.increment;
      //   this.angle += i * 0.02;
      if (i==3){
      stroke(100,0,0)
        vertices.push({x,y})
      // vertex(x, y);
      }else{
        stroke(255)
      }
    }

    // pop();
    endShape();
  };
}
