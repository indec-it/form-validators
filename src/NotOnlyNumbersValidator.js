const {isNaN, isString, toNumber} = require('lodash');
const Validator = require('./Validator');

class NotOnlyNumbersValidator extends Validator {
    constructor() {
        super();
        this.withErrorMessage('Value must be text.');
    }

    isValid(value) {
        if (value === '') {
            return true;
        }

        return isString(value) && isNaN(toNumber(value));
    }
}

module.exports = NotOnlyNumbersValidator;
