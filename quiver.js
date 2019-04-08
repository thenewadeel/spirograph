let Quiver = function(depth, rotSpeedLimit) {
  //   this.ads = createVector(width / 4, height / 4);
  this.rotSpeed = rotSpeedLimit || PI / 8;
  this.depth = depth || 2;
  this.arrows = [];
  this.init = function() {
    for (var i = 0; i < this.depth; i++) {
      this.arrows.push(
        createVector(
          random(-width / 4, width / 4),
          random(-height / 4, height / 4)
        )
      );
      this.arrows[i].angularSpeed = random(-this.rotSpeed, this.rotSpeed);
    }
  };
  this.rotary = function() {
    let results = [];
    for (var i = 0; i < this.arrows.length; i++) {
      this.arrows[i].rotate(this.arrows[i].angularSpeed);
      results.push(this.arrows[i]);
    }
    return results;
  };
  this.show = function() {
    for (var i = 0; i < this.arrows.length; i++) {
      stroke(
        map(i, 0, this.arrows.length, 0, 255),
        map(i, 0, this.arrows.length, 255, 0),
        255
      );
      line(0, 0, this.arrows[i].x, this.arrows[i].y);
    }
  };
};
