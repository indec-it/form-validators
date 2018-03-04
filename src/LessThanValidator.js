
const Validator = require('./Validator');

class LessThanValidator extends Validator {

    constructor(arg) {
        super(arg);
        this.withErrorMessage('Must be less than ');
    }

    isValid(value) {
        return value < this.arg;
    }
}

module.exports = LessThanValidator;


