const _ = require('lodash');
const Validator = require('./Validator');

class NotEqualsToValidator extends Validator {

    constructor(arg) {
        super(arg);
        this.withErrorMessage(`Must be not be equal to ${arg}.`);
    }

    isValid(value) {
        return !_.isEqual(this.arg, value);
    }
}

module.exports = NotEqualsToValidator;
