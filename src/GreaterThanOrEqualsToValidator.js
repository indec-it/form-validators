const _ = require('lodash');
const Validator = require('./Validator');

class GreaterThanOrEqualsToValidator extends Validator {

    constructor(arg) {
        if (!_.isNumber(arg)) {
            throw new Error('Argument must be a number.');
        }

        super(arg);
        this.withErrorMessage(`Must be greater than or equals to ${arg}.`);
    }

    isValid(value) {
        return value >= this.arg;
    }
}

module.exports = GreaterThanOrEqualsToValidator;
