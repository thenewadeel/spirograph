/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/matter-js/index.d.ts" />
var spiral, disc;
var angle = 0;
var pointer, pointer2;
var vertices = [];
let quiver;

function preload() {}
function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  // spiral=new Spiral(41,123);
  // pointer = createVector(1.2, 0.2);
  // disc = new Disc(pointer.x,pointer.y);
  quiver = new Quiver();
  quiver.init();
}
function draw() {
  translate(posX ? posX : width / 2, posY ? posY : height / 2);
  background(127);
  stroke(255);
  // fill(10,128,100);
  noFill();
  pointer.limit(mouseX||200);
  pointer.rotate((0.2 * PI) / 124);
  pointer2 = pointer.mult(-1.1);
  // pointer2.limit(100)
  // pointer2.rotate((0.2 * PI) / 12);
  vertices.push(
    { x: pointer2.x, y: pointer2.y },
    { x: pointer.x, y: pointer.y }
  );
  beginShape();
  for (var j = 0; j < vertices.length; j++) {
    vertex(vertices[j].x, vertices[j].y);
  }
  endShape();
  // endShape();
  // disc.show();
  // disc.setVector(pointer);
}
/*
angle+=0.01;
  push()
  disc.rotator(angle);
  beginShape();
  disc.show();
  
  pop();
  endShape();
  // rectMode(CENTER);
  rect(-width/2,-height/2,180,75)
  var message=disc.status();
  var k=1;
  for(var msg in  message){
    text(msg +" : " +message[msg],-width/2+5,-height/2 + k*15)
    k++
  }
*/
