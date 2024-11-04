class TrieNode {
    constructor() {
        this.children = {};  // Object to store child nodes
        this.isEndOfWord = false;  // Flag to indicate the end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }

    search(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return current.isEndOfWord;
    }

    startsWith(prefix) {
        let current = this.root;
        for (const char of prefix) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return true;
    }
}

// Example Usage:
const trie = new Trie();
trie.insert("hello");
console.log(trie.search("hello"));   // Output: true
console.log(trie.search("hell"));    // Output: false
console.log(trie.startsWith("hell")); // Output: true
trie.insert("hell");
console.log(trie.search("hell"));    // Output: true
