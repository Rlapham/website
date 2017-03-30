var distM; 

function preload() {
  imgC = loadImage("richC.png");
  imgM = loadImage("richM.png");
  imgY = loadImage("richY.png");
  imgK = loadImage("rich.png");
}


function drawChannel(image, x, y) {
    var u = 60;
    var v = 60;
    blend(image, 0, 0, u, v,  x - 0.5 * u, y - 0.5 * v, u, v, blendMode(MULTIPLY));
}



function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw(){
  background(255);
  imgC.loadPixels();
  imgM.loadPixels();
  imgY.loadPixels();  
  imgK.loadPixels();
  distM = dist(imgM.width/3, imgM.height/3, mouseX, mouseY); 
  console.log(distM); 
  console.log(imgM.width); 

if (distM < 250){

blendMode(BLEND);
image(imgM, 0, 0);

push();
translate(mouseX/20, mouseY/20);
image(imgY, 0, 0);
pop(); 

push();
translate(-mouseX/20, -mouseY/20);
image(imgC, 0, 0);
pop(); 
} else {
image(imgK, 0, 0);
}


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