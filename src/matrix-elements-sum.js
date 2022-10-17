const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    if (!matrix) throw new NotImplementedError('Not implemented');
    let zero = []
    let result = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++) {
            if (matrix[i][k] == 0) {
                zero.push(k)
            } else if (!zero.includes(k)) {
                result += matrix[i][k]
            }
        }
    }
    console.log(result);
    return result
}

module.exports = {
    getMatrixElementsSum
};