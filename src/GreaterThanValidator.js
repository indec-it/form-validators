const Validator = require('./Validator');

class GreaterThanValidator extends Validator {

    constructor(value, errorMessage) {
        super(errorMessage);
        this.value = value;
    }

    isValid(value) {
        return value > this.value;
    }
}

module.exports = GreaterThanValidator;


