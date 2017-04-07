///CREDITS: sketch inspired and modified from Sin/Cosine example sketch: https://p5js.org/examples/3d-sine-cosine-in-3d.html, and Multiple Particle System example: https://p5js.org/examples/simulate-multiple-particle-systems.html
// Code of VR integration from Google Cardboard: https://vr.chromeexperiments.com/
//////////////////////

var wrap; 
var wrap2;
var wrap3; 
var mapX = 0; 
var mapY = 0; 
var cameraZ = 0; 
var Zchange = 15; 
var mapXchange = .0002; 
var reversemapXchange = -.002; 
var mapYchange = .001; 
var spinSpeed = 500; 
var midChange = 1; 
var midUpdate = 1; 

// function preload(){
//    wrap = loadImage("white.png");
//    wrap2 = loadImage("white2.png");
//    wrap3 = loadImage("white3.png");
// }  

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
//  perspective(60 / 180 * PI, width/height, cameraZ * 0.1, cameraZ * 10);
   wrap = loadImage("gradient.png");
   wrap2 = loadImage("white33.png");
   wrap3 = loadImage("white66.png");
}

function draw(){
//  background(255);
  translate(0, 0, 0); 
  //for final videos// 
  //rotateY(degrees(180));
  camera(0, 0, cameraZ);
  cameraZ += Zchange; 
  //ease zoom in
 if (cameraZ > 5000){
    Zchange = -15; 
 }
  //ease zoom in
 if (cameraZ < -5000){
    Zchange = 15; 
 }
  
//  //drag to move the world.
//  orbitControl();
  //ambientLight(100, 80, 80);
  texture(wrap2);


//first spiral
//  push(); 
 for(var r = 0; r < 3; r++){
   rotateY(mapX); 
   if (mapX > PI){
      mapXchange = -.0002; 
      }
   if (mapY < -PI){
      mapXchange = .0002; 
      }
   mapX += mapXchange;  
 for(var j = 0; j < 1; j++){
    push();
    for(var i = 0; i < 300; i++){
      translate(0, -i, 0); 
      // rotateX(frameCount * 0.0005); 
      rotateY(frameCount * 0.000008); 
      rotateZ(frameCount * 0.0002);
      fill(20);
      push();
      sphere(5, 10, 10); 
      pop();
      }
    pop();
 }
 }
 
 
//free radical spiral
for(var r = 0; r < 1; r++){
// translate(0, 0, 100); 
// mapX = map(mouseX, 0, windowWidth, 0, PI); 
   rotateY(mapX); 
   if (mapX < -PI){
      reversemapXchange = .0002; 
      }
   if (mapY > PI){
      reversemapXchange = -.0002; 
      }
   mapX += reversemapXchange; 
   push(); 
// mapY = map(mouseY, 0, windowHeight, 0, .1); 
   rotateZ(mapY);
   if (mapY > 1){
      mapYchange = -.001; 
      }
   if (mapY < -.001){
      mapYchange = .001; 
      }
   mapY += mapYchange;
   for(var j = 0; j < 1; j++){
    push();
   //  push();
    rotateZ(PI); 
    for(var i = 0; i < 300; i++){
      translate(0, -i, 0); 
      // rotateX(frameCount * 0.0005); 
      rotateY(frameCount * 0.000008); 
      rotateZ(frameCount * 0.0002);
      push();
      sphere(5, 10, 10); 
      pop();
      // pop(); 
      }
   pop();
   }
   pop(); 
} 
 
 //free radical spiral 2
 push(); 
 rotateY(PI); 
for(var r = 0; r < 1; r++){
// translate(0, 0, 100); 
// mapX = map(mouseX, 0, windowWidth, 0, PI); 
   rotateY(mapX); 
   if (mapX < -PI){
      reversemapXchange = .0002; 
      }
   if (mapY > PI){
      reversemapXchange = -.0002; 
      }
   mapX += reversemapXchange; 
   push(); 
// mapY = map(mouseY, 0, windowHeight, 0, .1); 
   rotateZ(mapY);
   if (mapY > 1){
      mapYchange = -.001; 
      }
   if (mapY < -.001){
      mapYchange = .001; 
      }
   mapY += mapYchange;
   for(var j = 0; j < 1; j++){
    push();
   //  push();
    rotateZ(PI); 
    for(var i = 0; i < 300; i++){
      translate(0, -i, 0); 
      // rotateX(frameCount * 0.0005); 
      rotateY(frameCount * 0.000008); 
      rotateZ(frameCount * 0.0002);
      push();
      sphere(5, 10, 10); 
      pop();
      // pop(); 
      }
   pop();
   }
   pop(); 
} 
pop(); 
 
 
 //fibonacci 1
   for(var r = 0; r < 1; r++){
//  translate(0, 0, 100); 
// mapX = map(mouseX, 0, windowWidth, 0, .001); 
rotateY(mapX); 
   rotateY(mapX); 
   if (mapX > PI){
      mapXchange = -.0002; 
      }
   if (mapY < -PI){
      mapXchange = .0002; 
      }
   mapX += mapXchange; 
   push(); 
// mapY = map(mouseY, 0, windowHeight, 0, .1); 
   rotateZ(mapY);
   if (mapY > 1){
      mapYchange = -.001; 
      }
   if (mapY < -.001){
      mapYchange = .001; 
      }
   mapY += mapYchange;
push(); 
// mapY = map(mouseY, 0, windowHeight, 0, 9); 
// mapY - 1; 
// rotateZ(mapY); 
 for(var j = 0; j < 2; j++){
   //  mapY - 1; 
   //  rotateZ(mapY); 
    push();
    for(var i = 0; i < 800; i++){
      rotateZ(mapY); 
      translate(0, -i * 2, 0); 
      // rotateX(frameCount * 0.0005); 
      rotateY(frameCount * 0.00008); 
      rotateZ(frameCount * 0.00002);
      push();
      sphere(5, 10, 10); 
      pop();
      //update midChange
      // if (midChange > 100){
      // midUpdate = -1; 
      // }
      // if (midChange < 2){
      // midUpdate = 1; 
      // }
      // midChange += midUpdate;
      }
    pop();
    rotateY(PI); 
    if (mapY > 1){
      mapYchange = -.001; 
      }
    if (mapY < -.001){
      mapYchange = .001; 
      }
   mapY += mapYchange;
 }
 pop(); 
 } 
}

// //fibonacci mirror
//    for(var r = 0; r < 1; r++){
// //  translate(0, 0, 100); 
// // mapX = map(mouseX, 0, windowWidth, 0, .001); 
// rotateY(mapX); 
// mapX += .0006; 
// push(); 
// // mapY = map(mouseY, 0, windowHeight, 0, 9); 
// // mapY - 1; 
// // rotateZ(mapY); 
// rotateZ(PI);
//  for(var j = 0; j < 2; j++){
//    //  mapY - 1; 
//    //  rotateZ(mapY); 
//     push();
//     for(var i = 0; i < 300; i++){
//       rotateZ(mapY); 
//       translate(0, -i, 0); 
//       // rotateX(frameCount * 0.0005); 
//       rotateY(frameCount * 0.000008); 
//       rotateZ(frameCount * 0.0002);
//       push();
//       sphere(5, 10, 10); 
//       pop();
//       }
//     pop();
//     rotateY(3); 
//  }
//  pop(); 
//  } 
// }



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

