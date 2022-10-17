const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
    if (!arr) throw new NotImplementedError('Not implemented');
    let mainArr = [...arr]
    let arrey = []
    arr.forEach((element, index) => {
        if (element < 0) {
            arr.splice(index, 1)
        }
    });
    arr.forEach((element, index) => {
        if (element < 0) {
            arr.splice(index, 1)
        }
    });
    arr.sort((a, b) => a - b)
    let k = 0
    for (let i = 0; i < mainArr.length; i++) {
        if (mainArr[i] < 0) {
            arrey.push(mainArr[i])
        } else {
            arrey.push(arr[k])
            k++
        }
    }
    return arrey
}
module.exports = {
    sortByHeight
};