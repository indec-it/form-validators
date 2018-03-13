const _ = require('lodash');
const Validator = require('./Validator');

class LessThanOrEqualsToValidator extends Validator {
    constructor(arg) {
        if (!_.isNumber(arg)) {
            throw new Error('Argument must be a number.');
        }

        super(arg);
        this.withErrorMessage('Must be less than or equals to ');
    }

    isValid(value) {
        return value <= this.arg;
    }
}

module.exports = LessThanOrEqualsToValidator;


