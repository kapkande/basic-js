const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    if (!n) throw new NotImplementedError('Not implemented');

    let arr = []
    let arr2 = String(n).split('')
    let arr3 = []
    let b = true
    for (let i = 0; i < arr2.length; i++) {
        if (arr2.length == 2) {
            arr.push(arr2[i])
        } else if (arr2[i + 1]) {
            arr.push(arr2[i] + arr2[i + 1])
        }
    }
    arr.sort((a, b) => a - b);
    let a = String(arr[0].split('')[0]);
    arr2.forEach(element => {
        if (element == a && b == true) {
            b = false
        } else {
            arr3.push(element)
        }
    });
    return +arr3.join('')
}

module.exports = {
    deleteDigit
};