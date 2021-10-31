// Get the sha256 hash function.
const crypto = require("crypto"), SHA256 = message => crypto.createHash("sha256").update(message).digest("hex");

class Block {
    constructor(timestamp = "", data = []) {
        this.timestamp = timestamp;
        // this.data should contain information like transactions.
        this.data = data;
        this.hash = this.getHash();
        this.prevHash = ""; // previous block's hash
        this.nonce = 0;
    }

    // Our hash function.
    getHash() {
        return SHA256(this.prevHash + this.timestamp + JSON.stringify(this.data) + this.nonce);
    }

    mine(difficulty) {
        // Basically, it loops until our hash starts with 
        // the string 0...000 with length of <difficulty>.
        while (!this.hash.startsWith(Array(difficulty + 1).join("0"))) {
            // We increases our nonce so that we can get a whole different hash.
            this.nonce++;
            // Update our new hash with the new nonce value.
            this.hash = this.getHash();
        }
    }
}

class Blockchain {
    constructor() {
        // This property will contain all the blocks.
        this.chain = [new Block(Date.now().toString())];
        this.difficulty = 1;
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(block) {
        // Since we are adding a new block, prevHash will be the hash of the old latest block
        block.prevHash = this.getLastBlock().hash;
        // Since now prevHash has a value, we must reset the block's hash
        block.hash = block.getHash();
        block.mine(this.difficulty);
        this.chain.push(block);
    }

    isValid() {
        // Iterate over the chain
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const prevBlock = this.chain[i-1];

            // Check validation
            if (currentBlock.hash !== currentBlock.getHash() || prevBlock.hash !== currentBlock.prevHash) {
                return false;
            }
        }

        return true;
    }
}

const FalciChain = new Blockchain();

module.exports.Block = Block;
module.exports.Blockchain = Blockchain;
module.exports.FalciChain = FalciChain;