const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( /* s1, s2 */ ) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
    getCommonCharacterCount
};

let sum = 0

function getCommonCharacterCount(a, b) {
    sum = 0
    let aArrey = a.split('')
    let bArrey = b.split('')
    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < b.length; k++) {
            if (aArrey[i] == bArrey[k]) {
                sum += 1
                bArrey.splice(k, 1)
                break
            }
        }
    }
    return sum
}