const {isEqual} = require('lodash');
const Validator = require('./Validator');

class NotEqualsToValidator extends Validator {

    constructor(arg) {
        super(arg);
        this.withErrorMessage(`Must be not be equal to ${arg}.`);
    }

    isValid(value) {
        return !isEqual(this.arg, value);
    }
}

module.exports = NotEqualsToValidator;
