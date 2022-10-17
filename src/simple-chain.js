const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    chain: [],

    getLength() {
        return chainMaker.chain.length;
    },
    addLink(value) {
        chainMaker.chain.push(`( ${value} )`);
        return chainMaker;
    },
    removeLink(position) {
        if (position <= 0 || position > chainMaker.chain.length - 1 || !Number.isInteger(position)) {
            chainMaker.chain = [];
            throw new Error(`You can't remove incorrect link!`);
        }
        chainMaker.chain.splice(position - 1, 1);
        return chainMaker;
    },
    reverseChain() {
        chainMaker.chain.reverse();
        return chainMaker;
    },
    finishChain() {
        let result = '';
        if (chainMaker.chain.length > 0) {
            result = chainMaker.chain.join('~~');
        }
        chainMaker.chain = []
        return result;
    }
};
module.exports = {
    chainMaker
};