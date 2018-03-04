
const _ = require('lodash');
const Validator = require('./Validator');

class NotEqualsToValidator extends Validator {

    constructor(arg) {
        super(arg);
        this.errorMessage = 'Must be not be equal to ';
    }

    isValid(value) {
        return !_.isEqual(this.arg, value);
    }
}

module.exports = NotEqualsToValidator;
