
const Validator = require('./Validator');

class GreaterThanValidator extends Validator {

    constructor(arg) {
        super(arg);
        this.withErrorMessage('Must be greater than ');
    }

    isValid(value) {
        return value > this.arg;
    }
}

module.exports = GreaterThanValidator;
