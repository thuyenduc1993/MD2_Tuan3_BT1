import {TreeNode} from "./TreeNode";
export class BinaryTree<l>{
    root : TreeNode<l> | null;
    totalNode: number;
    constructor() {
        this.root = null;
        this.totalNode = 0;
    }
     getSize():number{
        return this.totalNode;
     }
    inorder(node:TreeNode<l>){
        if(node){
            console.log(node.data);
            if (node.left){
                this.inorder(node.left);
            }
            if (node.right){
                this.inorder(node.right);
            }
        }
    }
    insert(data:l){
        if(!this.root) {
            this.root =new TreeNode<l>(data);
            this.totalNode++;
            return this.root;
        }else {
            let node = new TreeNode<l>(data);
            let currentNode = this.root;
            while (currentNode) {
                if (data < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    currentNode = currentNode.left;

                } else if (data > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    currentNode = currentNode.right;
                }
            }
            this.totalNode++;
            return currentNode;
        }

    }

}