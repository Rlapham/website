function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    wrap = loadImage("gradient.png");

}

function draw() {
// background(255); 
  orbitControl();
 
  texture(wrap);
  
  for (i = 0; i <100; i++){
rotateZ(frameCount * .0004);  
rotateY(frameCount * .00004); 
if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
   //  sphere(100, mouseX/100, 0); 
    box(100, mouseX/100, 5);
    
   torus(mouseX/2, mouseX/8, 0);
   box(mouseY/4,mouseY/8,10);
   push(); 
   rotateX(PI/14);
   torus(mouseX/2, mouseX/80, 10);
   pop(); 
} // end if 
}
}