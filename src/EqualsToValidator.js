const {isEqual} = require('lodash');
const Validator = require('./Validator');

class EqualsToValidator extends Validator {

    constructor(arg) {
        super(arg);
        this.withErrorMessage(`Must be equal to ${arg}.`);
    }

    isValid(value) {
        return isEqual(this.arg, value);
    }
}

module.exports = EqualsToValidator;
