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
    this.height = 1;
  }
}

class AVLTree{
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

  x_factor(depth){
    return 70+112*2/(5*(depth+1))+10;
  }

  y_factor(depth){
    return 35+112/(3*(depth+1));
  }

  insert(val,root = this.root,depth,x=this.initial_x,y=this.initial_y){
    if(!root){
      return new Node(val,x,y,depth);
    }else{
      if(val<root.val){
        root.left = this.insert(val,root.left,depth+1,x-this.x_factor(depth),y+this.y_factor(depth));
      }else if (val>root.val) {
        root.right = this.insert(val,root.right,depth+1,x+this.x_factor(depth),y+this.y_factor(depth));
      }else{
        return this.root
      }
      root.height = 1 + Math.max(this.getHeight(root.left),this.getHeight(root.right));
      var balance = this.getBalance(root);

      //leftleft case
      if(balance > 1 && val<root.left.val){
          return this.rightRotate(root)
      }

      //rightright case
      if (balance < -1 && val > root.right.val){
          return this.leftRotate(root)
      }

      //leftright case
      if (balance > 1 && val > root.left.val){
          root.left = this.leftRotate(root.left)
          return this.rightRotate(root)
      }

      //rightleft case
      if (balance < -1 && val < root.right.val){
          root.right = this.rightRotate(root.right)
          return this.leftRotate(root)
        }
    }
    return root
  } //inserts single element in tree

  getHeight(root){
    if(root == null){
      return 0;
    }
    else{
      return root.height;
    }
  }

  getBalance(root){
    if(root == null){
      return 0
    }
    else{
      return this.getHeight(root.left) - this.getHeight(root.right)
    }
  }

  leftRotate(z){
    let y = z.right;
    let T2 = y.left;
    y.left = z;
    z.right = T2;
    y.position.x = z.position.x;
    y.position.y = z.position.y;
    y.depth--;
    z.height = 1 + Math.max(this.getHeight(z.left),this.getHeight(z.right));
    y.height = 1 + Math.max(this.getHeight(y.left),this.getHeight(y.right));
    this.updatePosition(y,y.depth);
    return y;
  }

  rightRotate(z){
    let y = z.left;
    let T2 = y.right;
    y.right = z;
    z.left = T2;
    y.position.x = z.position.x;
    y.position.y = z.position.y;
    y.depth--;
    z.height = 1 + Math.max(this.getHeight(z.left),this.getHeight(z.right));
    y.height = 1 + Math.max(this.getHeight(y.left),this.getHeight(y.right));
    this.updatePosition(y,y.depth);
    return y;
  }

  updatePosition(y,depth){
    if(y == null){
      return;
    }
    if(y.left != null){
      y.left.depth = depth + 1;
      y.left.position.x = y.position.x - this.x_factor(depth);
      y.left.position.y = y.position.y + this.y_factor(depth);
      this.updatePosition(y.left,depth + 1);
    }
    else{
    }
    if(y.right != null){
      y.right.depth = depth + 1;
      y.right.position.x = y.position.x + this.x_factor(depth);
      y.right.position.y = y.position.y + this.y_factor(depth);
      this.updatePosition(y.right,depth + 1);
    }
  }

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
