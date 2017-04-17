function Node2(val, x, y) {
  this.value = val;
  this.size = val/2; 
  this.col = (0, 255, 255); 
  this.colT = map(val, 0, 100, 255, 0); 
  this.left = null;
  this.right = null;
  this.distance = 2;
  this.x = x;
  this.y = y;
  this.velocity;
  this.acceleration;
  this.mass = 8;
   // Arbitrary damping to simulate friction / drag 
  this.damping = 0.95;

    // For mouse interaction
  this.dragOffset;
  this.dragging = false;
}

Node2.prototype.search = function(val) {
  if (this.value == val) {
    return this;
  } else if (val < this.value && this.left != null) {
    return this.left.search(val);
  } else if (val > this.value && this.right != null) {
    return this.right.search(val);
  }
  return null;
}

Node2.prototype.visit = function(parent) {
  if (this.left != null) {
    this.left.visit(this);
  }
  // console.log(this.value);
  fill(255);
  noStroke();
  textAlign(CENTER);
  textSize(12);
  // text(this.value, this.x, this.y);
  stroke(255, 100);
  line(parent.x, parent.y, this.x, this.y);
  noStroke();
  fill(this.col);
  //display
  // if (this.dragging) {
  //     fill(255);
  //     ellipse(mouseX, mouseY, this.mass*2, this.mass*2);
  // }
  if (this.value > 20){
  ellipse(this.x, this.y, this.size, this.size);
} else {
   ellipse(this.x, this.y, map(this.size, 0, 100, 0, 300) , map(this.size, 0, 100, 0, 300) );
}



  // ellipse(this.x, this.y, 30, 30);
  noStroke();
  if (this.value < 60 && this.value > 40 ){
    fill(200);
  } else{
  fill(this.colT);
  }
  text(this.value, this.x, this.y+4);
  if (this.right != null) {
    this.right.visit(this);
  }
}

Node2.prototype.addNode = function(n, x, y) {
  if (n.value < this.value) {
    if (this.left == null) {
      this.left = n;
      this.left.x = this.x + (canvasWidth/Math.pow(2,n.distance));
      this.left.y =  this.y +(canvasHeight/12);
    } else {
      n.distance++;
      this.left.addNode(n)
    }
  } else if (n.value > this.value) {
    if (this.right == null) {
      this.right = n;
      this.right.x = this.x - (canvasWidth/Math.pow(2, n.distance));
      this.right.y = this.y + (canvasHeight/20);
    } else {
      n.distance++;
      this.right.addNode(n);
    }
  }
}
