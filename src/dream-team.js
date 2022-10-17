const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    let arr = []
    if (!Array.isArray(members)) return false
    members.forEach(element => {
        if (typeof(element) == 'string') {
            let a = element.split('')
            for (let i = 0; i < a.length; i++) {
                if (a[i] !== ' ') {
                    arr.push(a[i].toUpperCase())
                    break
                }
            }
        }
    });


    arr.sort()
    return arr.join('')
}
module.exports = {
    createDreamTeam
};