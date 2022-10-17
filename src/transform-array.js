const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!");
    let arrey = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '--discard-prev' && arr[i - 2] == '--discard-next') {
            console.log(1);
        } else if (arr[i] == '--double-prev' && arr[i - 2] == '--discard-next') {
            console.log(2);
        } else if (arr[i] == '--discard-next') {
            i++
        } else if (arr[i] == '--discard-prev') {
            arrey.splice('-1')
        } else if (arr[i] == '--double-prev') {
            arr[i - 1] == undefined ? console.log(3) : arrey.push(arr[i - 1])
        } else if (arr[i] == '--double-next') {
            arr[i + 1] == undefined ? console.log(4) : arrey.push(arr[i + 1])
        } else arrey.push(arr[i])

    }

    return arrey
}

module.exports = {
    transform
};