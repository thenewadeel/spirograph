function Disc(x, y, r) {
  this.radius = r || 2;
  this.x = x || 0;
  this.y = y || 0;
  this.angle = 0;
  var offsetVector=createVector(13,8);
  this.show = function() {
    rotate(this.angle);
    ellipse(this.x, this.y, this.radius);
    ellipse(this.x + offsetVector.x, this.y+offsetVector.y, 4);
    offsetVector.rotate(PI/32);
    // var px={'x':this.x,'y':this.y}
    // vertices.push(px);
  };
  this.rotator = function(angle) {
    // this.x = this.x + cos(angle);
    // this.y = this.y + sin(angle);
    this.angle = angle;
  };
  this.status = function() {
    return { Angle: this.angle, Radius: this.radius, x: this.x, y: this.y };
  };
  this.setVector = function(vectorObj) {
    this.x = vectorObj.x;
    this.y = vectorObj.y;
  };
}
