const {every, size, values} = require('lodash');
const Validator = require('./Validator');

class AndValidator extends Validator {

    constructor() {
        if (size(arguments) < 2) {
            throw new Error('Validator must receive at least two validations.');
        }

        super(values(arguments));
        this.withErrorMessage('Must fulfill all validations.');
    }

    isValid(value) {
        return every(this.arg, validation => validation.isValid(value));
    }
}

module.exports = AndValidator;
