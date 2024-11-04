class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new BSTNode(val);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    find(val) {
        let current = this.root;
        while (current) {
            if (val === current.val) return true;
            current = val < current.val ? current.left : current.right;
        }
        return false;
    }

    delete(val) {
        function deleteNode(root, val) {
            if (!root) return null;
            if (val < root.val) {
                root.left = deleteNode(root.left, val);
            } else if (val > root.val) {
                root.right = deleteNode(root.right, val);
            } else {
                // Node to be deleted found
                if (!root.left) return root.right;
                if (!root.right) return root.left;

                // Node with two children
                let minNode = root.right;
                while (minNode.left) {
                    minNode = minNode.left;
                }
                root.val = minNode.val;
                root.right = deleteNode(root.right, root.val);
            }
            return root;
        }

        this.root = deleteNode(this.root, val);
    }
}

// Example Usage:
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
console.log(bst.find(5)); // Output: true
bst.delete(5);
console.log(bst.find(5)); // Output: false
