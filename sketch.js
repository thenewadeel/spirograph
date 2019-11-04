/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/matter-js/index.d.ts" />
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/QHEQuoIKgNE

var circles;
var spots, darkSpots;
var img;
let TOTAL_CIRCLES = 2000;
let singleActivation = false;
function preload() {
  img = loadImage("clip1.png");
}

function setup() {
  createCanvas(img.width, img.height);
  var density = displayDensity();
  pixelDensity(1);
  img.loadPixels();
  spots = [];
  darkSpots = [];
  circles = [];
  for (var x = 0; x < img.width; x++) {
    for (var y = 0; y < img.height; y++) {
      var index = x + y * img.width;
      var c = img.pixels[index * 4];
      var b = brightness([c]);
      if (b > 10) {
        spots.push(createVector(x, y));
      } else if (b < 10) {
        darkSpots.push(createVector(x, y));
      }
    }
  }

  // console.log(img.width);
  // console.log(img.height);
  // console.log("pixels", img.pixels.length);
  // console.log("spots", spots.length);
  // console.log(density);
  // console.log(pixelDensity());
}

function draw() {
  background(250);
  translate(posX, posY);
  if (circles.length < TOTAL_CIRCLES) {
    populateCircles();
  } else if (!this.singleActivation) {
    for (circ of circles) {
      circ.activate();
    }
    this.singleActivation = true;
  }

  for (circ of circles) {
    circ.show();
  }

  // background(img);
  // frameRate(20)
}
function populateCircles() {
  var total = 15;
  var count = 0;
  var attempts = 0;

  while (count < total) {
    var newC = newCircle();
    if (newC !== null) {
      circles.push(newC);
      count++;
      // if(circles.length)
    }
    attempts++;
    if (attempts > 1000) {
      // noLoop();
      console.log("finished");
      break;
    }
  }

  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];

    if (circle.growing) {
      if (circle.edges()) {
        circle.growing = false;
      } else {
        for (var j = 0; j < circles.length; j++) {
          var other = circles[j];
          if (circle !== other) {
            var d = dist(circle.x, circle.y, other.x, other.y);
            var distance = circle.r + other.r;

            if (d - 2 < distance) {
              circle.growing = false;
              break;
            }
          }
        }
      }
    }

    circle.grow();
  }
}

function newCircle() {
  var r = int(random(0, spots.length));
  var spot = spots[r];
  var x = spot.x;
  var y = spot.y;

  var valid = true;
  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];
    var d = dist(x, y, circle.x, circle.y);
    if (d < circle.r) {
      valid = false;
      break;
    }
  }
  if (valid) {
    return new Circle(x, y);
  } else {
    return null;
  }
}
function mousePressed(e) {
  console.log("pressed", e);
  e.preve;
  if (e.shiftKey) {
    for (circ of circles) {
      circ.homeOn();
    }
  } else if (e.button === 2) {
    for (circ of circles) {
      circ.deavtivate();
    }
  } else if (e.button === 0) {
    for (circ of circles) {
      circ.activate();
    }
  }
}
// function preload() {}
// function setup() {
//   var canvas = createCanvas(window.innerWidth, window.innerHeight);
// }
// function draw() {
//   translate(posX, posY);
//   background(128, 0, 0);
//   stroke(255, 0, 0);
//   circle(0, 0, 12);
// }
