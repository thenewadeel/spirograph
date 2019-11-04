// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/QHEQuoIKgNE
// let localMax = 0;
let MAX_RADIUS = 10,
  MIN_RADIUS = 3;
let MAX_SPEED = 8;
let MAX_ACC = 10;
function Circle(x, y) {
  this.localMax = 10;
  this.location = createVector(x, y);
  this.x = x;
  this.y = y;
  this.r = MIN_RADIUS;
  this.colorVal = "#46B4EB";
  this.growing = true;
  this.homeLoc = createVector(this.x, this.y);
  this.homing = false;
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.activated = false;
  this.distance = 0;
  this.distanceCalc = function() {
    let x = this.location.dist(this.homeLoc.copy());
    if (this.localMax < x) this.localMax = x;
    return x;
  };
  this.activate = function() {
    if (!this.activated) {
      this.activated = true;
      // this.homing ? (this.colorVal = "green") : (this.colorVal = "#FF0000");
      this.setAcc();
    }
  };
  this.setAcc = function() {
    if (this.homing) {
      let target = this.homeLoc.copy();
      this.distance = this.location.dist(target);
      if (this.distance > this.localMax) this.localMax = this.distance;
      if (this.distance < 2 * this.r) {
        this.reset();
      } else {
        this.acc = target.sub(this.location);
        this.acc.setMag(
          // 0.1
          map(this.distance, this.r, this.localMax, 0.0, MAX_ACC)
        );
      }
    } else {
      let x = random(-1.351, 1.51);
      let y = random(-1.351, 1.51);
      this.acc = createVector(x, y);
    }
  };
  this.deavtivate = function() {
    // console.log("deactivated");
    this.activated = false;
    // this.colorVal = "#46B4EB";
    // let x = random(-13.51, 13.51);
    // let y = random(-13.51, 13.51);
    this.vel = this.acc = createVector(0, 0);
  };
  this.homeingToggle = function() {
    this.homing = !this.homing;
    // console.log("homing");

    // this.activated = true;
  };
  this.updatePos = function() {
    // console.log("update posn running");
    this.setAcc();
    this.vel.add(this.acc);
    this.location.add(this.vel);
    // this.location.limit({ x: width, y: height });
    this.vel.limit(MAX_SPEED);
    this.checkEdges();

    // this.acc.mult(0.1);

    // if (
    //   this.x + 2 + this.r < width &&
    //   this.y + this.r + 2 < height &&
    //   this.x > this.r + 2 &&
    //   this.y > this.r + 2
    // ) {

    // } else {
    // this.deavtivate();
    // this.acc.setMag(0.02)
    // }
  };
  this.checkEdges = function() {
    // void checkEdges() {

    if (this.location.x > width) {
      this.location.x = 0;
    } else if (this.location.x < 0) {
      this.location.x = width;
    }

    if (this.location.y > height) {
      this.location.y = 0;
    } else if (this.location.y < 0) {
      this.location.y = height;
    }
    // }
  };
  this.grow = function() {
    if (this.growing && this.r < MAX_RADIUS) {
      this.r += 0.5;
    }
  };

  this.show = function() {
    // console.log("show function running");
    let colorComponent = map(this.distanceCalc(), 0, this.localMax, 0, 255);
    if (this.activated) {
      this.updatePos();
    }
    // stroke(0, 255 - colorComponent, 255 - colorComponent, 255 - colorComponent);
    // strokeWeight(1);
    noStroke();
    // noFill();
    if (this.homing) fill(0, 255, 0, colorComponent);
    else if (this.activated) fill(255, 0, 0, 200 - colorComponent);
    else fill(0, 0, 255);

    // fill(this.colorVal);
    this.x = this.location.x;
    this.y = this.location.y;
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };
  color;
  this.edges = function() {
    return (
      this.x + this.r >= width ||
      this.x - this.r <= 0 ||
      this.y + this.r >= height ||
      this.y - this.r <= 0
    );
  };
  this.reset = function() {
    this.acc = this.vel = createVector(0, 0);
    this.location = this.homeLoc.copy();
    this.localMax = 0;
    this.distanceCalc();
    this.homeingToggle();
    this.deavtivate();
  };
}
