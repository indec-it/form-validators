
const Validator = require('./Validator');

class GreaterThanValidator extends Validator {

    constructor(arg) {
        super(arg);
        this.errorMessage = 'Must be greater than ';
    }

    isValid(value) {
        return value > this.arg;
    }
}

module.exports = GreaterThanValidator;
