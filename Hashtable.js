class Hashtable {
    constructor (size = 100) {
        this.table = Array(size);
    }

    _generateIndex(key) {
        let hash = 5381;
        for (let i = 0; i < key.length; i++) {
            hash = (hash * 33) + key.charCodeAt(i);
        }
        return hash % this.table.size;
    }

    get(key) {
        const index = this._generateIndex(key);
        const bucket = this.table[index];
        
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    return bucket[i][1];
                }
            }
        }
        
        return undefined;  // Key not found
    }

    set(key, value) {
        const generatedIndex = this._generateIndex(key);

        // Initialize bucket
        if (!this.table[generatedIndex]) {
            this.table[generatedIndex] = [];
        }
        
        // Check if the key already exists in the bucket
        for (let i = 0; i < this.table[generatedIndex].length; i++) {
            if (this.table[generatedIndex][i][0] === key) {
                this.table[generatedIndex][i][1] = value;
                return;
            }
        }

        // Add the new key-value pair if key doesn't exist
        this.table[generatedIndex].push([key, value]);
    }

    remove(key) {
        // Check if key exists
        const generatedIndex = this._generateIndex(key);
        const bucket = this.table[generatedIndex];

        if (!bucket) console.log('Key is not in hashmap.');

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1); // Remove key-value pair
                return true;
            }
        }

        return false; // Key not found
    }

    display() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

// Example Usage
const hashTable = new Hashtable();
hashTable.set('name', 'Alice');
hashTable.set('age', 25);
hashTable.set('occupation', 'Engineer');

console.log(hashTable.get('name'));         // Output: Alice
console.log(hashTable.get('age'));          // Output: 25
hashTable.remove('occupation');
console.log(hashTable.get('occupation'));   // Output: undefined
hashTable.display();                        // Output: Displays non-empty buckets