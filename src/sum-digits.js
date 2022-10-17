const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {

    if (!n) { throw new NotImplementedError('Not implemented') };
    let arr = String(n).split('')
    let a
    let resolt = 0
    arr.forEach(element => {
        resolt = resolt + +element
    });
    if (resolt > 9) {
        return getSumOfDigits(resolt)
    } else {
        return resolt
    }


}

module.exports = {
    getSumOfDigits
};