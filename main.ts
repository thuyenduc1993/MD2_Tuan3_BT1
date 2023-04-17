
import {BinaryTree} from "./BinaryTree";

let binaryTree = new BinaryTree<number>();
binaryTree.insert(20);
binaryTree.insert(10);
binaryTree.insert(40);
binaryTree.insert(30);
binaryTree.insert(16);
binaryTree.insert(80);
binaryTree.insert(14);
binaryTree.insert(27);
binaryTree.insert(50);
console.log(binaryTree.totalNode);
console.log(binaryTree.inorder(binaryTree.root))

