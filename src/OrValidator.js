const {size, some, values} = require('lodash');
const Validator = require('./Validator');

class OrValidator extends Validator {

    constructor() {
        if (size(arguments) < 2) {
            throw new Error('Validator must receive at least two validations.');
        }

        super(values(arguments));
        this.withErrorMessage('Must fulfill at least one validator.');
    }

    isValid(value) {
        return some(this.arg, validation => validation.isValid(value));
    }
}

module.exports = OrValidator;
