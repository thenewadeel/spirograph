/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/matter-js/index.d.ts" />
var spiral, disc;
var angle = 0;
var pointer, pointer2;
var vertices = [];
let quiver, temp;
let trace, display, rotaryEngine;

function preload() {}
function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  quiver = new Quiver();
  quiver.init();
  trace = rotaryEngine = true;
}
function draw() {
  translate(posX ? posX : width / 2, posY ? posY : height / 2);
  background(220);
  stroke(250,12,77);
  noFill();
  if (trace) {
    beginShape();
    for (var j = 0; j < vertices.length; j++) {
      vertex(vertices[j].x, vertices[j].y);
    }
    endShape();
  }
  if (rotaryEngine) {
    temp = quiver.rotary();
    for (let j = 0; j < temp.length - 1; j++) {
      vertices.push(
        createVector(
          (temp[j].x + temp[j + 1].x) / 2,
          (temp[j].y + temp[j + 1].y) / 2
        )
      );
    }
  }
  if (display) {
    quiver.show();
  }
}
function keyReleased() {
  if (key == " ") {
    rotaryEngine = !rotaryEngine;
  }
  if (key == "t") {
    trace = !trace;
  }
  if (key == "d") {
    display = !display;
  }
  if (key == "x") {
    accelerate=!accelerate;
  }
  if (key == "+") {//NOT YET IMPLEMENTED
    speedFacror*= 2;
  }if (key == "-") {
    speedFacror/= 2;
  }
  
}
