///CREDITS: sketch inspired and modified from Sin/Cosine example sketch: https://p5js.org/examples/3d-sine-cosine-in-3d.html, and Multiple Particle System example: https://p5js.org/examples/simulate-multiple-particle-systems.html
// Code of VR integration from Google Cardboard: https://vr.chromeexperiments.com/
//////////////////////

var wrap; 
var wrap2;
var wrap3; 
var mapX; 
var mapY = 100; 
var change = 0; 
var changeBool = false; 

// function preload(){
   wrap = loadImage("dark.png");
//    wrap2 = loadImage("white2.png");
//    wrap3 = loadImage("white3.png");
// }  

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
   wrap = loadImage("gradient.png");
   wrap2 = loadImage("white33.png");
   wrap3 = loadImage("white66.png");
}

function draw(){
  background(255);
  //drag to move the world.
 orbitControl();
 
 translate(0, 0, -2000); 
//  ambientLight(100, 80, 80);
 texture(wrap);

 for(var r = 0; r < 8; r++){
//  translate(0, 0, 100); 

if (!changeBool) change+= .7; 
if (changeBool) change-= .7; 

if (change >= windowWidth) changeBool = true; 
if (change <= 0) changeBool = false; 
console.log(change); 


mapX = map(change, 0, windowWidth, 0, 1); 
rotateY(mapX); 
 for(var j = 0; j < 1; j++){
    push();
    for(var i = 0; i < 500; i++){
      translate(0, -i, 0); 
      // rotateX(frameCount * 0.0005); 
      rotateY(frameCount * 0.000008); 
      rotateZ(frameCount * 0.0002);
      push();
      sphere(8, 20, 20); 
      pop();
      }
    pop();
 }
 }
 
   for(var r = 0; r < 5; r++){
//  translate(0, 0, 100); 
mapX = map(mouseX, 0, windowWidth, 0, 1); 
mapX * 1.618; 
rotateY(mapX); 
push(); 
// mapY = map(mouseY, 0, windowHeight, 0, 9); 
// mapY - 1; 
// rotateZ(mapY); 
 for(var j = 0; j < 1; j++){
   //  mapY - 1; 
   //  rotateZ(mapY); 
    push();
    for(var i = 0; i < 500; i++){
       mapY - 1; 
      rotateZ(mapY); 
      translate(0, -i, 0); 
      // rotateX(frameCount * 0.0005); 
      rotateY(frameCount * 0.000008); 
      rotateZ(frameCount * 0.0002);
      push();
      sphere(8, 20, 20); 
      pop();
      }
    pop();
 }
 pop(); 
 } 
}

// push();
// translate(0,0, 100); 
//  for(var j = 0; j < 1; j++){
//     push();
//     for(var i = 0; i < 800; i++){
//       translate(0, -i, 0); 
//       // rotateX(frameCount * 0.0005); 
//       rotateY(frameCount * 0.000008); 
//       rotateZ(frameCount * 0.00008);
//       push();
//       sphere(mouseX/3, 10, 10); 
//       pop();
//       }
//     pop();
//  }
// pop(); 
// }

