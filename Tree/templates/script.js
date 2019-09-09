function setup(){
  createCanvas(windowWidth,windowHeight);
  t = new AVLTree({{result}},windowWidth/2,100);
}

function createNode(x,y,val,depth){
  fill(0);
  ellipse(x,y,30,30);
  fill(255);
  text(val,x-5,y+5);
  fill(0);
  text(depth,x+20,y);
}

function connect(start,end){
  line(start.position.x,start.position.y,end.position.x,end.position.y);
}

function drawTree(root){
  if(root == null){
    return
  }
  if(root.left){
    connect(root,root.left);
  }
  if(root.right){
    connect(root,root.right);
  }
  createNode(root.position.x,root.position.y,root.val,root.depth);
  drawTree(root.left);
  drawTree(root.right);
}

function draw(){
  drawTree(t.root);
}
