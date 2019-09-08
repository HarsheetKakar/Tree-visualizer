class Node{
  constructor(value,x1,y1,d = 0){
    this.val = value;
    this.left = null;
    this.right = null;
    this.position = { //position at which node is to be displayed
      x : x1,
      y : y1
    };
    this.depth = d;
  }
}

class Tree{
  constructor(A=[],x,y){
    this.root = null;
    this.initial_x = x;
    this.initial_y = y;
    if(A.length>0){
      this.buildTree(this.root,A)
    }
  }//constructor for tree

  buildTree(root,A){
    for(var i of A){
      this.root = this.insert(i,this.root,0)
    }
  }//builds Tree from an array


  insert(val,root = this.root,depth,x=this.initial_x,y=this.initial_y){
    let x_factor = 35+112/(2*(depth+1));
    let y_factor = 35+112/(3*(depth+1));
    if(!root){
      return new Node(val,x,y,depth);
    }else{
      if(val<root.val){
        root.left = this.insert(val,root.left,depth+1,x-x_factor,y+y_factor);
      }else if (val>root.val) {
        root.right = this.insert(val,root.right,depth+1,x+x_factor,y+y_factor);
      }else{
        return this.root
      }
      return root
    }
  } //inserts single element in tree


  inOrderTraversal(root = this.root){
      if(root == null){
        return ;
      }
      else{
        this.inOrderTraversal(root.left);
        console.log(root.val.toString()+" ");
        this.inOrderTraversal(root.right);
      }
    } //prints the elements of tree in order

}
