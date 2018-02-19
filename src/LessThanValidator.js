const Validator = require('./Validator');

class LessThanValidator extends Validator {

    constructor(max, errorMessage) {
        super(errorMessage);
        this.max = max;
    }

    isValid(value) {
        return value < this.max;
    }
}

module.exports = LessThanValidator;


