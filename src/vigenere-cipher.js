const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(reverse = true) {
        this.reverse = reverse;
    };
    encrypt(message, key) {
        if (!message || !key) throw new Error(`Incorrect arguments!`);
        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let messageNumber = []
        let keyNumber = []
        message.split('').forEach(element => {
            let number = alphabet.indexOf(element.toUpperCase())
            if (number == -1) number = element
            messageNumber.push(number)
        });
        key.split('').forEach(element => {
            let number = alphabet.indexOf(element.toUpperCase())
            if (number == -1) number = element
            keyNumber.push(number)
        });
        let keyNumberLength = keyNumber.length
        let k = 0
        let resolt = []
        for (let i = 0; i < messageNumber.length; i++) {
            if (typeof(messageNumber[i]) == 'number') {
                let n = (messageNumber[i] + keyNumber[k]) % 26
                resolt.push(n)
                k++
            } else {
                resolt.push(messageNumber[i])
            }
            if (k > keyNumberLength - 1) { k = 0 }
        }
        let resolt2 = []
        resolt.forEach(element => {
            if (typeof(element) == 'number') {
                resolt2.push(alphabet[element])
            } else {
                resolt2.push(element)
            }
        });
        return this.reverse ? resolt2.join('') : resolt2.reverse().join('');
    }
    decrypt(message, key) {
        if (!message || !key) throw new Error(`Incorrect arguments!`);
        let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let messageNumber = []
        let keyNumber = []
        message.split('').forEach(element => {
            let number = alphabet.indexOf(element.toUpperCase())
            if (number == -1) number = element
            messageNumber.push(number)
        });
        key.split('').forEach(element => {
            let number = alphabet.indexOf(element.toUpperCase())
            if (number == -1) number = element
            keyNumber.push(number)
        });
        let keyNumberLength = keyNumber.length
        let k = 0
        let resolt = []
        for (let i = 0; i < messageNumber.length; i++) {
            if (typeof(messageNumber[i]) == 'number') {
                let n = (messageNumber[i] - keyNumber[k]) % 26
                if (n < 0) {
                    n = (n + 26) % 26
                }
                resolt.push(n)
                k++
            } else {
                resolt.push(messageNumber[i])
            }
            if (k > keyNumberLength - 1) { k = 0 }
        }
        let resolt2 = []
        resolt.forEach(element => {
            if (typeof(element) == 'number') {
                resolt2.push(alphabet[element])
            } else {
                resolt2.push(element)
            }
        });
        return this.reverse ? resolt2.join('') : resolt2.reverse().join('');
    }
}

module.exports = {
    VigenereCipheringMachine
};