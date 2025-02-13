const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
    if (!n) throw new NotImplementedError('Not implemented');
    let arr = n.split('-')
    console.log(arr);
    let r = true
    arr.forEach(element1 => {
        element1.split('').forEach(element => {
            const regex = /[A-F 0-9]/g;
            if (!element.match(regex)) {
                console.log('f')
                r = false;
            }
        });
    });
    return r
}
module.exports = {
    isMAC48Address
};