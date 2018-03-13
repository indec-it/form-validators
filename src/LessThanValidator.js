const _ = require('lodash');
const Validator = require('./Validator');

class LessThanValidator extends Validator {
    constructor(arg) {
        if (!_.isNumber(arg)) {
            throw new Error('Argument must be a number.');
        }

        super(arg);
        this.withErrorMessage('Must be less than ');
    }

    isValid(value) {
        return value < this.arg;
    }
}

module.exports = LessThanValidator;


