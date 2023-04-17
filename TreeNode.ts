export class TreeNode<l>{
    data:l;
    left:TreeNode<l> | null;
    right:TreeNode<l> | null;
    constructor(data:l) {
        this.data = data;
        this.left = null;
        this.right =null;
    }

}