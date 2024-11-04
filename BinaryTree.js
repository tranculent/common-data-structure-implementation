class Node {
    constructor(val, left, right) {
        this.val = val;
        this.left = left || undefined;
        this.right = right || undefined;
    }
}

class BinaryTree {
    constructor(root) {
        this.root = root || undefined;
    }

    insert(node) {
        if (!this.root) {
            this.root = node;
            return;
        }

        const q = [this.root];

        while (q.length > 0) {
            const current = queue.shift();

            // Insert node in the first available position (left or right)
            if (!current.left) {
                current.left = node;
                return;
            } else if (!current.right) {
                current.right = node;
                return;
            }

            // If both children exist, continue traversing
            queue.push(current.left);
            queue.push(current.right);
        }
    }

    inorder() {
        function dfs(node) {
            if (!node) return;
            
            if (node.left) {
                dfs(node.left);
            }
            console.log(node.val);
            if (node.right) {
                dfs(node.right);
            }
        }

        dfs(this.root);
    }

    preorder() {
        function dfs(node) {
            if (!node) return;

            console.log(node.val);
            if (node.left) {
                dfs(node.left);
            }
            if (node.right) {
                dfs(node.right);
            }
        }
    }

    postorder() {
        function dfs(node) {
            if (!node) return;

            if (node.left) {
                dfs(node.left);
            }
            if (node.right) {
                dfs(node.right);
            }
            console.log(node.val);
        }
    }

    levelOrder() {
        if (!this.root) return;

        const q = [this.root];

        while (q.length > 0) {
            const current = q.shift();

            if (current.left) {
                q.push(current.left);
            }
            if (current.right) {
                q.push(current.right);
            }

            console.log(current.val);
        }
    }
}