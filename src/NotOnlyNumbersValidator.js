const _ = require('lodash');
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

        return _.isString(value) && _.isNaN(_.toNumber(value));
    }
}

module.exports = NotOnlyNumbersValidator;
