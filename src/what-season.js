const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( /* date */ ) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
    getSeason
};

function getSeason(arr) {
    if (typeof(arr) == 'undefined') { return 'Unable to determine the time of year!'; };
    let obj = arr.__proto__;

    let data = new Date().getMilliseconds()
    if (typeof obj['getDate'] !== 'function' ||
        Object.getOwnPropertyNames(arr).length > 0
    ) throw new Error('Invalid date!');

    let month = arr.getMonth();
    if (!arr) throw new Error('Invalid date!');
    if (month < 2 || month == 11) {
        resolt = 'winter'
    } else if (month < 5) {
        resolt = 'spring'
    } else if (month < 8) {
        resolt = 'summer'
    } else if (month < 11) {
        resolt = 'fall'
    }

    return resolt

}