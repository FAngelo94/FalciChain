const { Block, Blockchain, FalciChain } = require("./falcichain.js");
// Block is a class for creating blocks.
// Blockchain is the blockchain class, which means you can inherit this class and upgrade FalciChain if you want.
// FalciChain is a "Blockchain" object, which is ready to use.

// FalciChain.chain // The whole chain
// FalciChain.difficulty // The difficulty
// FalciChain.getLastBlock() // The latest block
// FalciChain.isValid() // "true" if chain is valid, "false" otherwise.
// new Block(timestamp /*string - "optional"*/, data /*array - "optional"*/) // Creates a new "Block" object.
// FalciChain.addBlock(block) // Mines the block and add the block to the chain.

// A transaction example:
FalciChain.addBlock(new Block(Date.now().toString(), [{ from: "askjfh", to: "sdfsdqw", amount: 100 }]));
FalciChain.addBlock(new Block(Date.now().toString(), [{ from: "ojdsgidfj", to: "sdfjsiufo", amount: 80 }]));
FalciChain.addBlock(new Block(Date.now().toString(), [{ from: "qwrtobij", to: "xvnoifge", amount: 120 }]));
// Note that this is only an example, transactions often need more steps before being pushed to the chain.
console.log(FalciChain.chain);