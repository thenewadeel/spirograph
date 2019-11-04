// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/QHEQuoIKgNE
let MAX_RADIUS = 7;
function Circle(x, y) {
  this.x = x;
  this.y = y;
  this.r = 1;
  this.colorVal = "#46B4EB";
  this.growing = true;
  this.homeLoc = { x: this.x, y: this.y };

  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.activated = false;
  this.activate = function() {
    if (!this.activated) {
      this.activated = true;
      this.colorVal = "#FF0000";
      let x = random(-13.51, 13.51);
      let y = random(-13.51, 13.51);
      this.acc = createVector(x, y);
    }
  };
  this.deavtivate = function() {
    // console.log("deactivated");
    this.activated = false;
    this.colorVal = "#46B4EB";
    // let x = random(-13.51, 13.51);
    // let y = random(-13.51, 13.51);
    this.acc = createVector(0, 0);
  };
  this.homeOn = function() {
    console.log("homing");
  };
  this.updatePos = function() {
    // console.log("update posn running");
    // if()
    // if (
    //   this.x + 2 + this.r < width &&
    //   this.y + this.r + 2 < height &&
    //   this.x > this.r + 2 &&
    //   this.y > this.r + 2
    // ) {
    this.vel.x += this.acc.x;
    this.vel.y += this.acc.y;
    this.acc.x *= 0.9;
    this.acc.y *= 0.9;
    this.x += this.vel.x % width;
    if (this.x < 0) {
      this.x = -1 * (this.x % width);
    } else {
      this.x % width;
    }
    this.y += this.vel.y % height;
    if (this.y < 0) {
      this.y = -1 * (this.y % height);
    } else {
      this.y % height;
    }
    // this.vel.x *= 0.1;
    // this.vel.y *= 0.1;
    // } else {
    // this.deavtivate();
    // this.acc.setMag(0.02)
    // }
  };
  this.grow = function() {
    if (this.growing && this.r < MAX_RADIUS) {
      this.r += 0.5;
    }
  };

  this.show = function() {
    console.log("show function running");
    if (this.activated) {
      this.updatePos();
    }
    // stroke(random(0, 250), random(0, 100), random(0, 128));
    strokeWeight(2);
    // noFill();
    fill(this.colorVal);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };

  this.edges = function() {
    return (
      this.x + this.r >= width ||
      this.x - this.r <= 0 ||
      this.y + this.r >= height ||
      this.y - this.r <= 0
    );
  };
}
