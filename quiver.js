let Quiver = function(depth, rotSpeed) {
  //   this.ads = createVector(width / 4, height / 4);
  this.rotSpeed = rotSpeed || PI / 256;
  this.depth = depth || 8;
  this.arrows = [];
  this.init = function() {
    for (var i = 0; i < this.depth; i++) {
      this.arrows.push(createVector(random(width / 2), random(height / 2)));
    }
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
