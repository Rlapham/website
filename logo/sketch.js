var distMouse; 

var distC; 
var distY; 

// var bob;
// var spring;


var MposX = 0;
var MposY = 0;
var YposX;
var YposY;
var CposX;
var CposY;


var imgWidth = 350; 
var imgHeight = 100; 

function preload() {
  imgC = loadImage("richC.png");
  imgM = loadImage("richM.png");
  imgY = loadImage("richY.png");
  imgK = loadImage("rich.png");
}


function drawChannel(image, x, y) {
    var u = 60;
    var v = 60;
    blend(image, 0, 0, u, v,  x - 0.5 * u, y - 0.5 * v, u, v, blendMode(ADD));
}



function setup() {
  createCanvas(imgWidth, imgHeight);
    // Note third argument in Spring constructor is "rest length"
  // spring = new Spring(width/2, 10, 100);
  // bob = new Bob(width/2, 100);

}

function draw(){
  background(255);
  imgC.loadPixels();
  imgM.loadPixels();
  imgY.loadPixels();  
  imgK.loadPixels(); 

  // ///spring
  //   // Apply a gravity force to the bob
  // var gravity = createVector(0,2);
  // bob.applyForce(gravity);
  
  // // Connect the bob to the spring (this calculates the force)
  // spring.connect(bob);
  // // Constrain spring distance between min and max
  // spring.constrainLength(bob, 30, 200);
  
  // // Update bob
  // bob.update();
  
  // // Draw everything
  // spring.displayLine(bob); 
  // bob.display();
  // spring.display();

  ///////
  distMouse = dist(imgM.width/3, imgM.height/3, mouseX, mouseY);


if (distMouse < 250){
blendMode(MULTIPLY);
image(imgM, MposX, MposY, imgWidth, imgHeight);


YposX = mouseX/80;
YposY =  mouseY/80; 
image(imgY, YposX, YposY, imgWidth, imgHeight);

CposX = -mouseX/80;
CposY = -mouseY/80;
image(imgC, CposX, CposY, imgWidth, imgHeight);


}
blendMode(ADD);


///Animate


if (distMouse > 250){
blendMode(MULTIPLY);
YdistX = dist(YposX, YposX, 0, 0); 
YdistY = dist(YposY, YposY, 0, 0); 

CdistX = dist(CposX, CposX, 0, 0); 
CdistY = dist(CposY, CposY, 0, 0); 

image(imgM, MposX, MposY, imgWidth, imgHeight);

///yellow
//x
if (YdistX > 0){
  YposX -= .5; 
} 
if (YdistX <= .5){
  YposX = 0; 
}
//y
if (YdistY > 0){
  YposY -= .5; 
} 
if (YdistY <= .5){
  YposY = 0; 
}
image(imgY, YposX, YposY, imgWidth, imgHeight);
////cyan 

//x
if (CdistX > 0){
  CposX += .5; 
} 
if (CdistX <= .5){
  CposX = 0; 
}
//y
if (CdistY > 0){
  CposY += .5; 
} 
if (CdistY <= .5){
  CposY = 0; 
}
image(imgC, CposX, CposY, imgWidth, imgHeight);

}

blendMode(ADD);




// } else {
// image(imgK, 0, 0);
// }


  // var x0 = 20;
  // var y0 = 20;
  // var dmouseX = mouseX - pmouseX;
  // var dmouseY = mouseY - pmouseY;
  //   background(255);
  //   noStroke();
  //   drawChannel(imgY, x0 - dmouseX, y0 - dmouseY);
  //   drawChannel(imgM, x0, y0);
  //   drawChannel(imgC, x0 + dmouseX, y0 + dmouseY);

}