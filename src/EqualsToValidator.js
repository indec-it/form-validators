const _ = require('lodash');
const Validator = require('./Validator');

class EqualsToValidator extends Validator {

    constructor(arg) {
        super(arg);
        this.withErrorMessage(`Must be equal to ${arg}.`);
    }

    isValid(value) {
        return _.isEqual(this.arg, value);
    }
}

module.exports = EqualsToValidator;
