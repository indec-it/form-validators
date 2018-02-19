const Validator = require('./Validator');
const lodash = require('lodash');

class EqualsToValidator extends Validator {

    constructor(value, errorMessage) {
        super(errorMessage);
        this.value = value;
    }

    isValid(value) {
        return lodash.isEqual(value, this.value);
    }
}

module.exports = EqualsToValidator;
