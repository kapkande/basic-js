const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    const matrix1 = matrix.map(arr => arr.map(element => 0));

    for (let i = 0; i < matrix1.length; i++) {
        for (let k = 0; k < matrix[i].length; k++) {
            let number = 0;
            if (matrix[i][k + 1]) {
                number += 1
            }
            if (matrix[i][k - 1]) {
                number += 1
            }


            if (matrix[i - 1]) {
                if (matrix[i - 1][k - 1]) {
                    number += 1
                } else number
                if (matrix[i - 1][k]) {
                    number += 1
                } else number
                if (matrix[i - 1][k + 1]) {
                    number += 1
                } else number
            }

            if (matrix[i + 1]) {
                if (matrix[i + 1][k - 1]) {
                    number += 1
                } else number
                if (matrix[i + 1][k]) {
                    number += 1
                } else number
                if (matrix[i + 1][k + 1]) {
                    number += 1
                } else number

            }

            matrix1[i][k] = number;

        }
    }
    console.log(matrix1);
    return matrix1;
}

module.exports = {
    minesweeper
};