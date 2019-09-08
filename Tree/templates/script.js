wW = document.documentElement.clientWidth;
wH = document.documentElement.clientHeight;
t = new Tree({{result}},wW/2,100); // change it to {{result}} when tests are done
/* creating a tree in memory */


function setup(){
  createCanvas(windowWidth,windowHeight)
}

function createNode(x,y,val){
  fill(0);
  ellipse(x,y,30,30);
  fill(255)
  text(val,x-5,y+5);
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
  createNode(root.position.x,root.position.y,root.val);
  drawTree(root.left);
  drawTree(root.right);
}

function draw(){
  drawTree(t.root);
}
